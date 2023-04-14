/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (54.87%)
 * Likes:    1143
 * Dislikes: 0
 * Total Accepted:    276.1K
 * Total Submissions: 503.1K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 *
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 *
 *
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  // 该解答运行第 34 个用例用时超时，字符串很长，期望答案也很长
  if (s.length < p.length) return [];
  const ans: number[] = [];
  const list = p.split('').sort();
  for (let i = 0; i <= s.length - p.length; i++) {
    const list2 = s
      .slice(i, i + p.length)
      .split('')
      .sort();
    let j: number;
    for (j = 0; j < p.length; j++) {
      if (list[j] !== list2[j]) break;
    }
    if (j === p.length) ans.push(i);
  }
  return ans;
}
// @lc code=end
