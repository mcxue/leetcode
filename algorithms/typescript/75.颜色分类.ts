/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 *
 * https://leetcode.cn/problems/sort-colors/description/
 *
 * algorithms
 * Medium (60.36%)
 * Likes:    1575
 * Dislikes: 0
 * Total Accepted:    527.5K
 * Total Submissions: 873.7K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 *
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 *
 *
 *
 *
 * 必须在不使用库内置的 sort 函数的情况下解决这个问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,0,1]
 * 输出：[0,1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] 为 0、1 或 2
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // 白色、蓝色放两边
  let [left, right] = [0, nums.length - 1];
  for (let i = 0; i < nums.length; i++) {
    if (i > right) break;
    if (nums[i] === 0) {
      nums[i] = nums[left];
      nums[left] = 0;
      left += 1;
    } else if (nums[i] === 2) {
      nums[i] = nums[right];
      nums[right] = 2;
      right -= 1;
      i -= 1;
    }
  }
}
// @lc code=end
