/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (72.25%)
 * Likes:    994
 * Dislikes: 0
 * Total Accepted:    274.5K
 * Total Submissions: 380K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder
 * 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * 输出：[3,9,20,null,null,15,7]
 *
 *
 * 示例 2:
 *
 *
 * 输入：inorder = [-1], postorder = [-1]
 * 输出：[-1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder 和 postorder 都由 不同 的值组成
 * postorder 中每一个值都在 inorder 中
 * inorder 保证是树的中序遍历
 * postorder 保证是树的后序遍历
 *
 *
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const map = new Map<number, number>();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const ans = recursive(0, inorder.length - 1, 0, postorder.length - 1);
  return ans;

  // j,k 为中序序列的左右边界，m,n 为后序序列的左右边界
  function recursive(j: number, k: number, m: number, n: number) {
    if (j > k || m > n) return null
    const value = postorder[n];
    const index = map.get(value) as number;
    const node = new TreeNode(value);
    node.left = recursive(j, index - 1, m, m + index - 1 - j);
    node.right = recursive(index + 1, k, m + index - j, n - 1);
    return node;
  }
}
// @lc code=end

buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
