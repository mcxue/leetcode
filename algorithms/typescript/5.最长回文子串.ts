/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (37.42%)
 * Likes:    6197
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 3.6M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 * 
 * 
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (!s.length) return '';
  let start = 0;
  let end = 0;
  const calIndex = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left > end - start) {
        start = left;
        end = right;
      }
      left -= 1;
      right += 1;
    }
  };
  for (let i = 0; i < s.length; i++) {
    calIndex(i - 1, i + 1); // 从中间字符 i 向左、右扩散
    calIndex(i, i + 1); // 用于中间两个字符 i、i+1 向左、右扩散
  }
  return s.slice(start, end + 1);
};
// @lc code=end

/**
 * 中心扩散法，时间复杂度为 O(n^2)
 */