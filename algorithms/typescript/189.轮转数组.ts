/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 *
 * https://leetcode.cn/problems/rotate-array/description/
 *
 * algorithms
 * Medium (44.13%)
 * Likes:    1822
 * Dislikes: 0
 * Total Accepted:    640.9K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右轮转 1 步: [7,1,2,3,4,5,6]
 * 向右轮转 2 步: [6,7,1,2,3,4,5]
 * 向右轮转 3 步: [5,6,7,1,2,3,4]
 *
 *
 * 示例 2:
 *
 *
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 * 解释:
 * 向右轮转 1 步: [99,-1,-100,3]
 * 向右轮转 2 步: [3,99,-1,-100]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 * 0 <= k <= 10^5
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。
 * 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  const m = k % n;
  if (m <= 0) return;
  let count = 0;
  let start = 0;
  while (count < nums.length) {
    let current = start;
    let temp = nums[(start + n - m) % n];
    do {
      [nums[current], temp] = [temp, nums[current]];
      current = (current + m) % n;
      count += 1;
    } while (current !== start);
    start += 1;
  }
}
// @lc code=end

rotate([1, 2, 3, 4, 5, 6, 7], 3);

/**
 * 逐个复制，想到的最直观的解法
 * @param nums
 * @param k
 */
function rotate1(nums: number[], k: number): void {
  const n = nums.length;
  const m = k % n;
  if (m <= 0) return;
  const tempList: number[] = [];
  for (let i = 0; i < m; i++) {
    tempList.push(nums[n - i - 1]);
  }
  for (let i = n - 1; i >= m; i--) {
    nums[i] = nums[i - m];
  }
  for (let i = 0; i < m; i++) {
    nums[i] = tempList[m - i - 1];
  }
}

/**
 * 做3次反转，非常有技巧性
 * @param nums
 * @param k
 */
function rotate2(nums: number[], k: number): void {
  const n = nums.length;
  const m = k % n;
  if (m <= 0) return;
  reverse(0, nums.length - 1);
  reverse(0, m - 1);
  reverse(m, n - 1);
  function reverse(left: number, right: number) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
      right -= 1;
    }
  }
}

/**
 * 环状替换，这里使用 count 来做计数，最小公约的计数用法容易忘
 * @param nums 
 * @param k 
 * @returns 
 */
function rotate3(nums: number[], k: number): void {
  const n = nums.length;
  const m = k % n;
  if (m <= 0) return;
  let count = 0;
  let start = 0;
  while (count < nums.length) {
    let current = start;
    let temp = nums[(start + n - m) % n];
    do {
      [nums[current], temp] = [temp, nums[current]];
      current = (current + m) % n;
      count += 1;
    } while (current !== start);
    start += 1;
  }
}
