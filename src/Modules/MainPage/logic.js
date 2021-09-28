import CommonAppStore from "../../Store";
import TreeNode from "../../Classes/Node";

export function stepAdd(tree, indexes, value) {
  if (indexes.length === 0) {
    tree.push(new TreeNode(value, []));
    updatetree(tree);
    return;
  }
  let index = indexes.shift();
  if (index !== undefined) {
    stepAdd(tree[index]["childs"], indexes, value);
    CommonAppStore.data = tree;
  }
}

export function stepEdit(tree, indexes, value) {
  if (indexes.length === 1) {
    let value_index = indexes.shift();
    console.log(CommonAppStore.data);
    tree[value_index].data = value;
  } else {
    console.log("doing");
    let index = indexes.shift();
    stepEdit(tree[index]["childs"], indexes, value);
  }

  updatetree(tree);
}

export function stepRemove(tree, indexes) {
  if (indexes.length === 1) {
    let value_index = indexes.shift();
    tree.splice(value_index, 1);
    return;
  }
  let index = indexes.shift();
  stepRemove(tree[index]["childs"], indexes, index);
  updatetree(tree);
}

function updatetree(tree) {
  CommonAppStore.data = [];
  CommonAppStore.data = tree;
}
 