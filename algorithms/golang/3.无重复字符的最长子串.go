/*
 * @lc app=leetcode.cn id=3 lang=golang
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

// @lc code=start
func lengthOfLongestSubstring(s string) int {
	ans, dict := 0, [128]int{}
	for i, j := 0, 0; j < len(s); j++ {
		if i < dict[s[j]] {
			i = dict[s[j]]
		}
		dict[s[j]] = j + 1
		if ans < j-i+1 {
			ans = j - i + 1
		}
	}
	return ans
}

// @lc code=end

/*
 * other top voted solution
 */
func lengthOfLongestSubstring(s string) int {
	ans, dict := 0, [128]bool{}
	for i, j := 0, 0; j < len(s); j++ {
		if dict[s[j]] {
			for ; dict[s[j]]; i++ {
				dict[s[i]] = false
			}
		}
		dict[s[j]] = true
		if ans < j-i+1 {
			ans = j - i + 1
		}
	}
	return ans
}
