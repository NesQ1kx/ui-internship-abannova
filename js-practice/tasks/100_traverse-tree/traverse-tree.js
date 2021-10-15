export const traverseTree = (tree, callback) => {
  callback(tree);
  tree.children.forEach((subTree) => {
    traverseTree(subTree, callback);
  });
};
