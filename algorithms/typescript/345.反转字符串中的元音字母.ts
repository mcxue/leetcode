/*
 * @lc app=leetcode.cn id=345 lang=typescript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode.cn/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (54.39%)
 * Likes:    289
 * Dislikes: 0
 * Total Accepted:    155.5K
 * Total Submissions: 285.9K
 * Testcase Example:  '"hello"'
 *
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
 *
 * 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "hello"
 * 输出："holle"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "leetcode"
 * 输出："leotcede"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 3 * 10^5
 * s 由 可打印的 ASCII 字符组成
 *
 *
 */

// @lc code=start
function reverseVowels(s: string): string {
  const list = s.split('');
  let [left, right] = [0, s.length - 1];
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  while (left < right) {
    if (!set.has(list[left])) {
      left += 1;
      continue;
    }
    if (!set.has(list[right])) {
      right -= 1;
      continue;
    }
    if (left < right) {
      [list[left], list[right]] = [list[right], list[left]];
    }
    left += 1;
    right -= 1;
  }
  return list.join('');
}
// @lc code=end
