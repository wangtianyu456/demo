const list = [
  { pid: null, id: 1, data: "1" },
  { pid: 1, id: 2, data: "2-1" },
  { pid: 1, id: 3, data: "2-2" },
  { pid: 2, id: 4, data: "3-1" },
  { pid: 3, id: 5, data: "3-2" },
  { pid: 4, id: 6, data: "4-1" },
];

function listToTree(list) {
  let root = null;
  list.forEach((node) => {
    const { pid } = node;
    if (pid) {
      const parentNode = list.find((node) => node.id === pid);
      if (parentNode.children) {
        parentNode.children.push(node);
      } else {
        parentNode.children = [node];
      }
    } else {
      root = pid;
    }
  });
  return root;
}

function _listToTree(list) {
  const record = {};
  let root = null;
  list.forEach((node) => {
    record[node.id] = node;
  });
  list.forEach((node) => {
    if (node.pid) {
      const parentNode = record[node.pid];
      if (parentNode) {
        if (parentNode.children) {
          parentNode.children.push(node);
        } else {
          parentNode.children = [node];
        }
      }
    } else {
      root = node;
    }
  });
  return root;
}

function __listToTree(list) {
  const record = {};
  let root = null;
  list.forEach((node) => {
    const { id, pid } = node;
    record[id] = record[id] ? { ...record[id], ...node } : node;
    if (pid) {
      const parentNode = record[pid];
      if (parentNode) {
        parentNode.children
          ? parentNode.children.push(node)
          : (parentNode.children = [node]);
      } else {
        record[pid] = { children: [node] };
      }
    } else {
      root = node;
    }
  });
}

const listToTree1 = (list) => {
  let tree = {};
  let map = {};
  for (const item of list) {
    map[item.id] = { ...item, children: [] };
  }
  for (const item of list) {
    const { id, pid } = item;
    const curNode = map[id];
    if (!pid) {
      tree = curNode;
    } else {
      if (map[pid]) {
        map[pid].children.push(curNode);
      } else {
        map[pid] = {
          children: [curNode],
        };
      }
    }
  }
  return tree;
};
const listToTree2 = (list) => {
  let tree = null;
  const map = {};
  list.forEach((node) => {
    map[node.id] = { ...node, children: [] };
  });
  list.forEach((node) => {
    const { pid, id } = node;
    if (!pid) {
      tree = map[id];
    } else {
      if (map[pid]) {
        map[pid].children.push(node);
      } else {
        map[pid] = {
          children: [node],
        };
      }
    }
  });
  return tree;
};

console.log(listToTree2(list));
