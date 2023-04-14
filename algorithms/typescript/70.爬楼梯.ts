/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 *
 * https://leetcode.cn/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (54.03%)
 * Likes:    2983
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.1M
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 *
 * 示例 2：
 *
 *
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 45
 *
 *
 */

// @lc code=start
function climbStairs(n: number): number {
  // f(n) = f(n-1) + f(n-2)
  // 直接使用递归用时超时
  // if (n === 1) return 1;
  // if (n === 2) return 2;
  // return climbStairs(n - 1) + climbStairs(n - 2);
  let [p, q, r] = [0, 0, 1];
  for (let i = 1; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
}
// @lc code=end

climbStairs(2);
