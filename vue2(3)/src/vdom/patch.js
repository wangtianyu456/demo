export function patch(oldVnode, vnode) {
  const isRealElement = oldVnode.nodeType;
  if (isRealElement) {
    // 初次渲染
    const oldElm = oldVnode;
    const parentElm = oldElm.parentNode;
    let el = createElm(vnode);
    parentElm.insertBefore(el, oldElm.nextSibling);
    parentElm.removeChild(oldElm);
    return el;
  } else {
    if (oldVnode.tag !== vnode.tag) {
      oldVnode.el.parentNode.replaceChild(createElm(vnode), oldVnode.el);
    }
    // 如果老节点是文本
    if (!oldVnode.tag) {
      if (oldVnode.text !== vnode.text) {
        oldVnode.el.textContent = vnode.text;
      }
    }
    const el = (vnode.el = oldVnode.el);
    updateProperties(vnode, oldVnode.data);
    const oldCh = oldVnode.children || [];
    const newCh = vnode.chldren || [];

    if (oldCh.length > 0 && newCh.length > 0) {
      updateChildren(el, oldCh, newCh);
    } else if (oldCh.length) {
      // 老的有子节点，新的没有
      el.innerHTML = "";
    } else if (newCh.length) {
      // 老的没有，新的有
      for (let i = 0; i < newCh.length; i++) {
        const child = newCh[i];
        el.append(createElm(child));
      }
    }
  }
}

function isSameVnode(oldVnode, newVnode) {
  return oldVnode.tag === newVnode.tag && oldVnode.key === newVnode.key;
}

function updateChildren(parent, oldCh, newCh) {
  let oldStartIndex = 0;
  let oldStartVnode = oldCh[oldStartIndex];
  let oldEndIndex = oldCh.length - 1;
  let oldEndVnode = oldCh[oldEndIndex];

  let newStartIndex = 0;
  let newStartVnode = newCh[newStartIndex];
  let newEndIndex = newCh.length - 1;
  let newEndVnode = newCh[newEndIndex];

  function makeIndexByKey(children) {
    let map = {};
    children.forEach((item, index) => {
      map[item.key] = index;
    });
    return map;
  }
  let map = makeIndexByKey(oldCh);

  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
    // 头头比较
    if (isSameVnode(oldStartVnode, newStartVnode)) {
      patch(oldStartVnode, newStartVnode);
      oldStartIndex++;
      newStartIndex++;
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      // 尾尾对比
      patch(oldEndVnode, newEndVnode);
      oldEndIndex--;
      newEndIndex--;
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      // 旧头 新尾
      patch(oldStartVnode, newEndVnode);
      // 将旧头移动到当前旧尾之后
      parent.insertBefore(oldStartVnode.el, oldEndVnode.el.nextSibling);
      oldStartIndex++;
      newEndIndex--;
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      // 旧尾 新头
      patch(oldEndVnode, newStartVnode);
      // 将旧尾移动到头部
      parent.insertBefore(oldEndVnode.el, oldStartVnode.el);
      oldEndIndex--;
      newStartIndex++;
    } else {
      // 乱序比对
      // 利用就节点的key map 来尽可能的复用
      let moveIndex = map(newStartVnode.key);
      if (!moveIndex) {
        // 没有，直接创建新节点插入到当前开头
        parent.insertBefore(createElm(newStartVnode), oldStartVnode.el);
      } else {
        // 匹配到了，将匹配到的旧节点移动到前边
        let moveVnode = oldCh(moveIndex);
        oldCh[moveIndex] = undefined;
        parent.insertBefore(moveVnode.el, oldStartVnode.el);
        patch(moveVnode, newStartVnode);
      }
    }
  }

  // 如果老节点循环完毕了，新节点还未结束，则循环创建
  if (newStartIndex <= newEndIndex) {
    for (let i = newStartIndex; i <= newEndIndex; i++) {
      const anchor =
        newCh[newEndIndex + 1] == null ? null : newCh[newEndIndex + 1].el;
      parent.insertBefore(createElm(newCh[i], anchor));
    }
  }

  // 循环完毕老节点还有剩的，新节点没了，移除
  if (oldStartIndex <= oldEndIndex) {
    for (let i = oldStartIndex; i < oldEndIndex; i++) {
      const child = oldCh[i];
      if (child) {
        parent.removeChild(child.el);
      }
    }
  }
}

function createElm(vnode) {
  const { tag, data, key, children, text } = vnode;
  if (typeof tag === "string") {
    if (createComponent(vnode)) {
      return vnode.componentInstance.$el;
    }
    // 元素
    vnode.el = document.createElement("tag");
  } else {
    vnode.el = document.createTextNode(text);
  }
  return vnode.el;
}

function createComponent(vnode) {
  let i = vnode.data;
  if ((i = i.hook) && (i = i.init)) {
    i(vnode);
  }
  if (vnode.componentInstance) {
    return true;
  }
}

function updateProperties(vnode, oldProps = {}) {
  const newProps = vnode.data || {}; //新的vnode的属性
  const el = vnode.el; // 真实节点
  // 如果新的节点没有 需要把老的节点属性移除
  for (const k in oldProps) {
    if (!newProps[k]) {
      el.removeAttribute(k);
    }
  }
  // 对style样式做特殊处理 如果新的没有 需要把老的style值置为空
  const newStyle = newProps.style || {};
  const oldStyle = oldProps.style || {};
  for (const key in oldStyle) {
    if (!newStyle[key]) {
      el.style[key] = "";
    }
  }
  // 遍历新的属性 进行增加操作
  for (const key in newProps) {
    if (key === "style") {
      for (const styleName in newProps.style) {
        el.style[styleName] = newProps.style[styleName];
      }
    } else if (key === "class") {
      el.className = newProps.class;
    } else {
      // 给这个元素添加属性 值就是对应的值
      el.setAttribute(key, newProps[key]);
    }
  }
}
