/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode.cn/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (48.58%)
 * Likes:    789
 * Dislikes: 0
 * Total Accepted:    304.9K
 * Total Submissions: 627.6K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 *
 *
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1
 * -10^4
 *
 *
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let row = -1;
  for (let i = 0; i < m; i++) {
    if (target <= matrix[i][n - 1]) {
      row = i;
      break;
    }
  }
  if (row === -1) return false;
  let [left, right] = [0, n - 1];
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (matrix[row][mid] === target) return true;
    if (matrix[row][mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
// @lc code=end
