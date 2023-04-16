/*
 * @lc app=leetcode.cn id=130 lang=typescript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode.cn/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (46.20%)
 * Likes:    954
 * Dislikes: 0
 * Total Accepted:    223.5K
 * Total Submissions: 483.9K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X'
 * 填充。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：board =
 * [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
 * 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
 * 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 *
 *
 * 示例 2：
 *
 *
 * 输入：board = [["X"]]
 * 输出：[["X"]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == board.length
 * n == board[i].length
 * 1
 * board[i][j] 为 'X' 或 'O'
 *
 *
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  if (board.length === 0 || board[0].length === 0) return;
  for (let i = 0; i < board.length; i++) {
    dfs(i, 0);
    dfs(i, board[0].length - 1);
  }
  for (let i = 0; i < board[0].length; i++) {
    dfs(0, i);
    dfs(board.length - 1, i);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === 'Y') {
        board[i][j] = 'O';
      }
    }
  }
  function dfs(row: number, col: number) {
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== 'O'
    ) {
      return;
    }
    board[row][col] = 'Y';
    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }
}
// @lc code=end
