/*
 * @lc app=leetcode.cn id=164 lang=typescript
 *
 * [164] 最大间距
 *
 * https://leetcode.cn/problems/maximum-gap/description/
 *
 * algorithms
 * Hard (60.30%)
 * Likes:    556
 * Dislikes: 0
 * Total Accepted:    81.3K
 * Total Submissions: 134.8K
 * Testcase Example:  '[3,6,9,1]'
 *
 * 给定一个无序的数组 nums，返回 数组在排序之后，相邻元素之间最大的差值 。如果数组元素个数小于 2，则返回 0 。
 *
 * 您必须编写一个在「线性时间」内运行并使用「线性额外空间」的算法。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [3,6,9,1]
 * 输出: 3
 * 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
 *
 * 示例 2:
 *
 *
 * 输入: nums = [10]
 * 输出: 0
 * 解释: 数组元素个数小于 2，因此返回 0。
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums.length <= 10^5
 * 0 <= nums[i] <= 10^9
 *
 *
 */

// @lc code=start
function maximumGap(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    ans = Math.max(ans, nums[i + 1] - nums[i]);
  }
  return ans;
}
// @lc code=end
