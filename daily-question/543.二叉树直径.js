/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 //给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。
var diameterOfBinaryTree = function(root) {
  var max = 0
  function foo(node){
    if(!node) return -1;
    var maxLeft = foo(node.left)
    var maxRight = foo(node.right)
    max = Math.max(max, maxLeft + maxRight + 2)
    return Math.max(maxLeft + 1, maxRight + 1)
  }
  foo(node)
  return max;
}