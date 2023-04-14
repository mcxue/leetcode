/*
 * @lc app=leetcode.cn id=1004 lang=typescript
 *
 * [1004] 最大连续1的个数 III
 *
 * https://leetcode.cn/problems/max-consecutive-ones-iii/description/
 *
 * algorithms
 * Medium (59.80%)
 * Likes:    531
 * Dislikes: 0
 * Total Accepted:    117.6K
 * Total Submissions: 196.6K
 * Testcase Example:  '[1,1,1,0,0,0,1,1,1,1,0]\n2'
 *
 * 给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
 * 输出：6
 * 解释：[1,1,1,0,0,1,1,1,1,1,1]
 * 粗体数字从 0 翻转到 1，最长的子数组长度为 6。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
 * 输出：10
 * 解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
 * 粗体数字从 0 翻转到 1，最长的子数组长度为 10。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * nums[i] 不是 0 就是 1
 * 0 <= k <= nums.length
 *
 *
 */

// @lc code=start
function longestOnes(nums: number[], k: number): number {
  let [left, right] = [0, 0];
  let ans = 0;
  let count = 0; // 已翻转 0 的个数
  while (right < nums.length) {
    if (nums[right] === 0) {
      count += 1;
    }
    right += 1;
    if (count <= k) {
      ans = Math.max(ans, right - left);
    }
    if (count > k) {
      if (nums[left] === 0) {
        count -= 1;
      }
      left += 1;
    }
  }
  return ans;
}
// @lc code=end
