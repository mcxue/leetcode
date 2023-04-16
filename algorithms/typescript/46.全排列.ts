/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (78.86%)
 * Likes:    2514
 * Dislikes: 0
 * Total Accepted:    845.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1]
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 *
 *
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const ans: number[][] = [];
  const n = nums.length;
  backtrack([], nums);

  function backtrack(list: number[], restList: number[]) {
    if (list.length === n) {
      ans.push([...list]);
      return;
    }
    for (let i = 0; i < restList.length; i++) {
      list.push(restList[i]);
      backtrack(list, [...restList.slice(0, i), ...restList.slice(i+1)]);
      list.pop();
    }
  }
  return ans;
}
// @lc code=end

permute([1,2,3])
