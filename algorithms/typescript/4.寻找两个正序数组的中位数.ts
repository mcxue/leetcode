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

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  let left = 0;
  let right = nums1.length;
  let middle = Math.floor((left + right) / 2);
  let middle2 = Math.floor((nums1.length + nums2.length) / 2) - middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    middle2 = Math.floor((nums1.length + nums2.length) / 2) - middle;
    // 查询 middle 是否符合条件，如果不符合条件则缩小条件，如果符合条件则设置 middle 退出循环
    if (
      nums1[middle - 1] !== undefined &&
      nums2[middle2] !== undefined &&
      nums1[middle - 1] > nums2[middle2]
    ) {
      right = middle - 1;
    } else if (
      nums2[middle2 - 1] !== undefined &&
      nums1[middle] !== undefined &&
      nums2[middle2 - 1] > nums1[middle]
    ) {
      left = middle + 1;
    } else {
      break;
    }
  }
  // 查询紧靠右边的最小值
  let rightMin = nums1[middle];
  if (rightMin === undefined || rightMin > nums2[middle2]) {
    rightMin = nums2[middle2];
  }
  if ((nums1.length + nums2.length) % 2 === 1) {
    return rightMin;
  } else {
    // 查询紧靠左边的最小值
    let leftMax = nums1[middle - 1];
    if (leftMax === undefined || leftMax < nums2[middle2 - 1]) {
      leftMax = nums2[middle2 - 1];
    }
    return (leftMax + rightMin) / 2;
  }
}
// @lc code=end

/**
 * 解法实现思路如下，使用二分法查找，时间复杂度为 O(log(m+n))
 * 在两个数组 nums1、nums2 分别画一条竖线，使其满足以下两个条件：
 *  1. 条件一：当 nums1.length + nums2.length 为偶数时，nums1 中竖线左边的个数 + nums2 中竖线左边的个数 = nums1 中竖线右边的个数 + nums2 中竖线右边的个数，当 nums1.length + nums2.length 为奇数时，等式右边比左边大 1
 *  2. 条件二：nums1 中竖线左边的值小于等于 nums2 中竖线右边的值，并且 nums2 中左边的值小于等于 nums1 中竖线右边的值
 * 得出结果：
 * 当 nums1.length + num2.length 为奇数时，中位数是两条竖线紧靠右边的最小值
 * 当 nums1.length + num2.length 为偶数时，中位数是 (两条竖线紧靠左边的最大值 + 两条竖线紧靠右边的最小值)/2
 * 细节：
 * 可以画 nums1.length 条竖线，所以上面算法中，middle 的范围为 [0, nums1.length]，其竖线在 middle - 1 和 middle 之间
 */

/**
 * 将两个数组排成有序的，根据下标查找到中位数
 * 其时间复杂度为 O(m+n)
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums3 = nums1.concat(nums2);
  nums3.sort((a, b) => a - b);
  const middle = Math.floor(nums3.length / 2);
  if (nums3.length % 2 === 1) {
    return middle;
  } else {
    const middle2 = middle - 1;
    return (middle + middle2) / 2;
  }
}

/**
 * 和排序算法相关，参考了归并排序中的递推公式，指针一位一位往后挪，直到指到中位数下标得到中位数
 * 其时间复杂度为 O(m+n)
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const middle = Math.floor(nums1.length + nums2.length);
  const middle2 = middle - 1;
  let num1 = -1;
  let num2 = -1;
  const odd = (nums1.length + nums2.length) % 2 === 1;
  let cursor1 = 0;
  let cursor2 = 0;
  let i = 0;
  while (nums1[cursor1] !== undefined || nums2[cursor2] !== undefined) {
    if (
      nums1[cursor1] === undefined ||
      (nums1[cursor1] !== undefined &&
        nums2[cursor2] !== undefined &&
        nums1[cursor1] > nums2[cursor2])
    ) { // 挪动指向第二个数组的指针的条件
      if (i === middle) {
        num1 = nums2[cursor2];
      } else if (!odd && i === middle2) {
        num2 = nums2[cursor2];
      }
      cursor2++;
      i++;
    } else { // 不挪动第二个数组的指针即挪动第一个
      if (i === middle) {
        num1 = nums1[cursor1];
      } else if (!odd && i === middle2) {
        num2 = nums1[cursor1];
      }
      cursor1++;
      i++;
    }
  }
  return odd ? num1 : (num1 + num2) / 2;
}
