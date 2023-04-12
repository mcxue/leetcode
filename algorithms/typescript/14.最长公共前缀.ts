/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode.cn/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (43.20%)
 * Likes:    2663
 * Dislikes: 0
 * Total Accepted:    1M
 * Total Submissions: 2.4M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 *
 *
 * 示例 2：
 *
 *
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (ans.length === 0) return '';
    const minLength = Math.min(ans.length, strs[i].length);
    let temp = '';
    for (let j = 0; j < minLength; j++) {
      if (ans[j] === strs[i][j]) {
        temp += ans[j];
      } else {
        break;
      }
    }
    ans = temp;
  }
  return ans;
}
// @lc code=end
