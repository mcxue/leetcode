/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 *
 * https://leetcode.cn/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (75.53%)
 * Likes:    970
 * Dislikes: 0
 * Total Accepted:    405.9K
 * Total Submissions: 537.3K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
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
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 *
 * 示例 2:
 *
 *
 * 输入: numRows = 1
 * 输出: [[1]]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1
 *
 *
 */

// @lc code=start
function generate(numRows: number): number[][] {
  /**
   * 找规律 a[m][n] = a[m-1][n-1] + a[m-1][n]
   */
  const ans: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    ans[i] = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
  }
  return ans;
}
// @lc code=end

generate(5);
