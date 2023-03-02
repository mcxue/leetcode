/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] N 字形变换
 *
 * https://leetcode.cn/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (52.08%)
 * Likes:    1965
 * Dislikes: 0
 * Total Accepted:    535.5K
 * Total Submissions: 1M
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * 
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * 
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * 
 * string convert(string s, int numRows);
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "PAYPALISHIRING", numRows = 3
 * 输出："PAHNAPLSIIGYIR"
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "PAYPALISHIRING", numRows = 4
 * 输出："PINALSIGYAHRPI"
 * 解释：
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "A", numRows = 1
 * 输出："A"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 由英文字母（小写和大写）、',' 和 '.' 组成
 * 1 
 * 
 * 
 */

/**
 * 找到字符串组合的规律，然后直接按下标找到字符并组合
 * 输入为 "PAYPALISHIRING" 4，预期结果为 "PINALSIGYAHRPI" 反 N 如下
 * P     I    N     下标分别为 0 6 12              第 0 行下标相差 2*numRows - 2
 * A   L S  I G     下标分别为 1 5 7 11 13         第 1 行下标第一次相差 2*(numRows-1) - 2*r，第二次相差 2*r
 * Y A   H R        下标分别为 2 4 8 10            第 2 行下标第一次相差 2*(numRows-1) - 2*r，第二次相差 4*r
 * P     I          下标分别为 3 9                 第 numRows-1 行下标相差 2*numRows - 2
 * 得出以下规律
 * 第 0 行和 numRows -1 行的下标相差一致，为 2*numRows - 2
 * 其他行的下标会周期性变化，首次间隔相差 2*(numRows -1 - r)，第二次间隔 2*r，随后其间隔在这两个之间循环
 * 最后可以得到下面这个优雅的代码
 * @param s 
 * @param numRows 
 * @returns 
 */
// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 0) return '';
  if (numRows === 1) return s;
  let result = '';
  for (let i = 0; i < numRows; i++) {
    let cursor = i;
    let switchIntervalFlag = false; // 有两个间隔，用该变量作为切换间隔的标志
    while (s[cursor]) {
      result += s[cursor];
      if (i === 0 || i === numRows - 1) {
        cursor += 2 * (numRows - 1);
      } else {
        cursor += switchIntervalFlag ? 2 * i : 2 * (numRows - 1 - i);
        switchIntervalFlag = !switchIntervalFlag;
      }
    }
  }
  return result;
};
// @lc code=end

