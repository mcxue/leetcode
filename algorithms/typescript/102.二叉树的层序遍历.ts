/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (65.53%)
 * Likes:    1650
 * Dislikes: 0
 * Total Accepted:    792.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[9,20],[15,7]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1]
 * 输出：[[1]]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [0, 2000] 内
 * -1000 <= Node.val <= 1000
 *
 *
 */

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

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function levelOrder(root: TreeNode | null): number[][] {
  const ans: number[][] = [];
  const queue: TreeNode[] = [];
  if (!root) return [];
  queue.push(root);
  while (queue.length) {
    const list: TreeNode[] = [];
    while (queue.length) {
      list.push(queue.shift() as TreeNode);
    }
    let numItem: number[] = [];
    const tempList: TreeNode[] = [];
    list.forEach((node) => {
      numItem.push(node.val);
      if (node.left) tempList.push(node.left);
      if (node.right) tempList.push(node.right);
    });
    ans.push(numItem);
    while (tempList.length) {
      queue.push(tempList.shift() as TreeNode);
    }
  }
  return ans;
}
// @lc code=end
