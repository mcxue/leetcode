/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode.cn/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (68.91%)
 * Likes:    484
 * Dislikes: 0
 * Total Accepted:    264.2K
 * Total Submissions: 383.4K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
 *
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 *
 *
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: rowIndex = 3
 * 输出: [1,3,3,1]
 *
 *
 * 示例 2:
 *
 *
 * 输入: rowIndex = 0
 * 输出: [1]
 *
 *
 * 示例 3:
 *
 *
 * 输入: rowIndex = 1
 * 输出: [1,1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 0
 *
 *
 *
 *
 * 进阶：
 *
 * 你可以优化你的算法到 O(rowIndex) 空间复杂度吗？
 *
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  let array: number[][] = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    array[i] = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
    }
  }
  return array[rowIndex];
}
// @lc code=end
