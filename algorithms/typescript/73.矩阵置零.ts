/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 *
 * https://leetcode.cn/problems/set-matrix-zeroes/description/
 *
 * algorithms
 * Medium (62.93%)
 * Likes:    860
 * Dislikes: 0
 * Total Accepted:    244.3K
 * Total Submissions: 388.2K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * 输出：[[1,0,1],[0,0,0],[1,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -2^31 <= matrix[i][j] <= 2^31 - 1
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
 * 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 * 你能想出一个仅使用常量空间的解决方案吗？
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rowFlagList: boolean[] = [];
  const columnFlagList: boolean[] = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowFlagList[i] = true;
        columnFlagList[j] = true;
      }
    }
  }
  matrix.forEach((row, index) => {
    row.forEach((value, index2) => {
      if (rowFlagList[index] || columnFlagList[index2]) {
        matrix[index][index2] = 0
      }
    });
  });
}
// @lc code=end

setZeroes([
  [0, 0, 0, 5],
  [4, 3, 1, 4],
  [0, 1, 1, 4],
  [1, 2, 1, 3],
  [0, 0, 1, 1],
]);
