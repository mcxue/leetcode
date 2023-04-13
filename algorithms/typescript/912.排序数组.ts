/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 *
 * https://leetcode.cn/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (52.75%)
 * Likes:    826
 * Dislikes: 0
 * Total Accepted:    523K
 * Total Submissions: 992.3K
 * Testcase Example:  '[5,2,3,1]'
 *
 * 给你一个整数数组 nums，请你将该数组升序排列。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [5,2,3,1]
 * 输出：[1,2,3,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [5,1,1,2,0,0]
 * 输出：[0,0,1,1,2,5]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 5 * 10^4
 * -5 * 10^4 <= nums[i] <= 5 * 10^4
 *
 *
 */

// @lc code=start
function sortArray(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (nums[min] < nums[i]) {
      [nums[i], nums[min]] = [nums[min], nums[i]];
    }
  }
  return nums;
}

// @lc code=end

/**
 * 冒泡排序
 * 时间复杂度 O(n^2)，第 14 个测试用例的数组太长，会超时
 * @param nums
 * @returns
 */
function sortArray1(nums: number[]): number[] {
  for (let i = nums.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

/**
 * 选择排序
 * 时间复杂度 O(n^2)
 * 在未排序的数组中选择一个最小值到最左端，指针向后移，重复上述操作
 * @param nums
 * @returns
 */
function sortArray2(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (nums[min] < nums[i]) {
      [nums[i], nums[min]] = [nums[min], nums[i]];
    }
  }
  return nums;
}

/**
 * 插入排序
 * 时间复杂度 O(n^2)
 * 从右侧未排序的数组中选择第一个值插入到左侧已排序的数组
 * @param nums
 * @returns
 */
function sortArray3(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j >= 1; j--) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      } else {
        break;
      }
    }
  }
  return nums;
}

/**
 * 快速排序
 * 时间复杂度 O(nlogn)
 * 第 13 个测试用例的数组太长，堆栈溢出
 * @param nums
 * @returns
 */
function sortArray4(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  const pivotIndex = Math.floor(nums.length / 2);
  const pivot = nums[pivotIndex];
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...sortArray(left), pivot, ...sortArray(right)];
}
/**
 * 归并排序
 * 时间复杂度 O(nlogn)
 * 第 19 个测试用例数组长度为 50000，数字特殊，导致计算时间超时
 * @param nums 
 * @returns 
 */
function sortArray5(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  const middleIndex = Math.floor(nums.length / 2);
  const left = nums.slice(0, middleIndex);
  const right = nums.slice(middleIndex);
  return merge(sortArray5(left), sortArray5(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift() as number);
    } else {
      result.push(right.shift() as number);
    }
  }
  return result.concat(left, right);
}