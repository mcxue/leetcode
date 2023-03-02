/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (39.10%)
 * Likes:    8793
 * Dislikes: 0
 * Total Accepted:    2.2M
 * Total Submissions: 5.6M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 * 
 * 
 */

/**
 * 非常容易理解的版本，将字符串遍历一遍，维护一个最长字符串数组，将数组长度与 max 做比较
 * @param s
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  let max = 0;
  const array: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    const found = array.indexOf(value);
    if (found >= 0) {
      array.splice(0, found + 1);
      array.push(value);
    } else {
      array.push(value);
      if (array.length > max) {
        max = array.length;
      }
    }
  }
  return max;
}
 */

/**
 * 稍微有一点难理解的版本，使用哈希表维护滑动窗口，将两个指针之间差值得出的最长字符串长度与 max 做比较
 * 参考 https://leetcode.cn/problems/longest-substring-without-repeating-characters/solution/longest-substring-without-repeating-characters-b-2/
 * @param s 
 * @returns 
 */
// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  let max = 0;
  const map = new Map(); // 哈希表存放数组的下一个位置
  let left = 0; // 这里 cursor 是滑动窗口的左指针
  for (let right = 0; right < s.length; right++) { // 这里的 i 是滑动窗口的右指针
    left = Math.max(left, map.get(s[right]) || 0); // 取得之前存的指针
    map.set(s[right], right + 1); // 设置该字符与其下一个指针位置
    max = Math.max(max, right - left + 1);
  }
  return max;
};
// @lc code=end

