/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 *
 * https://leetcode.cn/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (69.05%)
 * Likes:    1462
 * Dislikes: 0
 * Total Accepted:    416.8K
 * Total Submissions: 603.8K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i
 * 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: temperatures = [73,74,75,71,69,72,76,73]
 * 输出: [1,1,4,2,1,1,0,0]
 *
 *
 * 示例 2:
 *
 *
 * 输入: temperatures = [30,40,50,60]
 * 输出: [1,1,1,0]
 *
 *
 * 示例 3:
 *
 *
 * 输入: temperatures = [30,60,90]
 * 输出: [1,1,0]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= temperatures.length <= 10^5
 * 30 <= temperatures[i] <= 100
 *
 *
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const ans: number[] = [];
  const stack: number[] = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length !== 0 &&temperatures[i] >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans[i] = 0;
    } else {
      ans[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return ans;
}
// @lc code=end
