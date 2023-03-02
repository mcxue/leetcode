/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode.cn/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (41.66%)
 * Likes:    6315
 * Dislikes: 0
 * Total Accepted:    899.3K
 * Total Submissions: 2.2M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 * 
 * 
 */

/**
 * 简单版，将两个数组合并成一个大数组后然后计算中位数，它的时间复杂度为 O(n+m)，不满足 O(log(n+m)) 的要求
 * 满足需求的版本需要用二分法
 * @param nums1 
 * @param nums2 
 */
// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const list: number[] = [];
  let cursor1 = 0;
  let cursor2 = 0;
  while (cursor1 < nums1.length && cursor2 < nums2.length) {
    if (nums1[cursor1] <= nums2[cursor2]) {
      list.push(nums1[cursor1]);
      cursor1 += 1;
    } else {
      list.push(nums2[cursor2]);
      cursor2 += 1;
    }
  }
  if (cursor1 >= nums1.length) {
    while (cursor2 < nums2.length) {
      list.push(nums2[cursor2]);
      cursor2 += 1;
    }
  } else if (cursor2 >= nums2.length) {
    while (cursor1 < nums1.length) {
      list.push(nums1[cursor1]);
      cursor1 += 1;
    }
  }
  const index = Math.floor(list.length / 2);
  if (list.length % 2 === 0) {
    return (list[index] + list[index - 1]) / 2;
  } else {
    return list[index];
  }
};
// @lc code=end

