/*
 * @lc app=leetcode.cn id=498 lang=typescript
 *
 * [498] 对角线遍历
 *
 * https://leetcode.cn/problems/diagonal-traverse/description/
 *
 * algorithms
 * Medium (55.74%)
 * Likes:    438
 * Dislikes: 0
 * Total Accepted:    105.1K
 * Total Submissions: 188.5K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,4,7,5,3,6,8,9]
 *
 *
 * 示例 2：
 *
 *
 * 输入：mat = [[1,2],[3,4]]
 * 输出：[1,2,3,4]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 10^4
 * 1 <= m * n <= 10^4
 * -10^5 <= mat[i][j] <= 10^5
 *
 *
 */

// @lc code=start
function findDiagonalOrder(mat: number[][]): number[] {
  const [m, n] = [mat.length, mat[0].length];
  let positiveFlag = true;
  const ans: number[] = [];
  // 找规律：发现有 n+m-1 条斜线，每次遍历的斜线横纵坐标和比上一次多 1 个单位
  for (let i = 0; i < m + n - 1; i++) {
    if (positiveFlag) {
      // row 尽可能大，column 尽可能小
      let row = Math.min(i, m - 1);
      let column = i - row;
      // row 和 column 都未到达尽头
      while (row !== 0 && column < n - 1) {
        ans.push(mat[row][column]);
        column += 1;
        row -= 1;
      }
      ans.push(mat[row][column]);
    } else {
      // column 尽可能大，row 尽可能小
      let column = Math.min(i, n - 1);
      let row = i - column;
      // row 和 column 都未到达尽头
      while (column !== 0 && row < m - 1) {
        ans.push(mat[row][column]);
        row += 1;
        column -= 1;
      }
      ans.push(mat[row][column]);
    }
    positiveFlag = !positiveFlag;
  }
  return ans;
}
// @lc code=end
