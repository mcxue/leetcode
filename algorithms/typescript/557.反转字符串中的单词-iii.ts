/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 *
 * https://leetcode.cn/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (73.85%)
 * Likes:    545
 * Dislikes: 0
 * Total Accepted:    302K
 * Total Submissions: 409K
 * Testcase Example:  `"Let's take LeetCode contest"`
 *
 * 给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "Let's take LeetCode contest"
 * 输出："s'teL ekat edoCteeL tsetnoc"
 *
 *
 * 示例 2:
 *
 *
 * 输入： s = "God Ding"
 * 输出："doG gniD"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 5 * 10^4
 * s 包含可打印的 ASCII 字符。
 * s 不包含任何开头或结尾空格。
 * s 里 至少 有一个词。
 * s 中的所有单词都用一个空格隔开。
 *
 *
 */

// @lc code=start
function reverseWords(s: string): string {
  let temp = '';
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      temp = s[i] + temp;
    } else {
      ans += temp + ' ';
      temp = '';
    }
  }
  ans += temp;
  return ans;
}
// @lc code=end
