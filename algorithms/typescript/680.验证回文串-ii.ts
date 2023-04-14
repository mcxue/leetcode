/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文串 II
 *
 * https://leetcode.cn/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (40.00%)
 * Likes:    575
 * Dislikes: 0
 * Total Accepted:    131.8K
 * Total Submissions: 329.5K
 * Testcase Example:  '"aba"'
 *
 * 给你一个字符串 s，最多 可以从中删除一个字符。
 *
 * 请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "aba"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "abca"
 * 输出：true
 * 解释：你可以删除字符 'c' 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "abc"
 * 输出：false
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^5
 * s 由小写英文字母组成
 *
 *
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  const fn = (fixFlag: boolean, left: number, right: number): boolean => {
    while (left < right) {
      if (s[left] !== s[right]) {
        if (fixFlag) {
          if (fn(false, left + 1, right)) return true;
          return fn(false, left, right - 1);
        } else {
          return false;
        }
      }
      left += 1;
      right -= 1;
    }
    return true;
  };
  return fn(true, 0, s.length - 1);
}
// @lc code=end
