/*
 * @lc app=leetcode.cn id=709 lang=typescript
 *
 * [709] 转换成小写字母
 *
 * https://leetcode.cn/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (76.90%)
 * Likes:    225
 * Dislikes: 0
 * Total Accepted:    121.7K
 * Total Submissions: 158.3K
 * Testcase Example:  '"Hello"'
 *
 * 给你一个字符串 s ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "Hello"
 * 输出："hello"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "here"
 * 输出："here"
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "LOVELY"
 * 输出："lovely"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 由 ASCII 字符集中的可打印字符组成
 *
 *
 */

// @lc code=start
function toLowerCase(s: string): string {
  const list: string[] = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    const charCode = s[i].charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      char = String.fromCharCode(charCode | 32);
    }
    list.push(char);
  }
  return list.join('');
}
// @lc code=end
