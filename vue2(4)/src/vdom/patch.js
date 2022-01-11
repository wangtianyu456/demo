export function patch(oldVnode, vNode) {
  const el = createElement(vNode);
  const parentNode = oldVnode.parentNode;
  parentNode.insertBefore(el, oldVnode.nextSibling);
  parentNode.removeChild(oldVnode);
}

function createElement(vNode) {
  if (typeof vNode.tag === "string") {
    vNode.el = document.createElement(vNode.tag);
    updateProperties(vNode);
    for (let i = 0; i < vNode.children.length; i++) {
      const child = vNode.children[i];
      vNode.el.appendChild(createElement(child));
    }
  } else {
    vNode.el = document.createTextNode(vNode.text);
  }
  return vNode.el;
}
