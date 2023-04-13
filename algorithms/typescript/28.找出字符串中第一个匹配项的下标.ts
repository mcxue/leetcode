/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 *
 * https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Medium (42.25%)
 * Likes:    1832
 * Dislikes: 0
 * Total Accepted:    828.9K
 * Total Submissions: 2M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 *
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0
 * 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：haystack = "sadbutsad", needle = "sad"
 * 输出：0
 * 解释："sad" 在下标 0 和 6 处匹配。
 * 第一个匹配项的下标是 0 ，所以返回 0 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：haystack = "leetcode", needle = "leeto"
 * 输出：-1
 * 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack 和 needle 仅由小写英文字符组成
 *
 *
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let cursor = 0;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] === needle[j]) {
        cursor += 1;
      } else {
        break;
      }
    }
    if (cursor === needle.length) return i;
  }
  return -1;
}
// @lc code=end

/**
 * BF 暴力匹配算法如下，时间复杂度为 O(mn)
 * @param haystack
 * @param needle
 * @returns
 */
function strStr1(haystack: string, needle: string): number {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let cursor = 0;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] === needle[j]) {
        cursor += 1;
      } else {
        break;
      }
    }
    if (cursor === needle.length) return i;
  }
  return -1;
}

/**
 * RK 算法，借助哈希算法实现高效的字符串匹配
 * 下列函数无法通过 LeetCode 全部测试用例，因为计算 hash 时中间变量超过了 JS 的安全整数范围
 * @param haystack
 * @param needle
 * @returns
 */
function strStr2(haystack: string, needle: string) {
  const [BASE, PRIME] = [26, 997];
  function hash(str: string) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = (h * BASE + str.charCodeAt(i)) % PRIME;
    }
    return h;
  }
  const [n, m] = [haystack.length, needle.length];
  const patternHash = hash(needle);
  let textHash = hash(haystack.slice(0, m));
  for (let i = 0; i <= n - m; i++) {
    if (textHash === patternHash && haystack.slice(i, i + m) === needle) {
      return i;
    }
    textHash =
      ((textHash - haystack.charCodeAt(i) * Math.pow(BASE, m - 1)) * BASE +
        haystack.charCodeAt(i + m)) %
      PRIME;
    if (textHash < 0) {
      textHash += PRIME;
    }
  }
  return -1;
}

/**
 * BM 算法，坏字符规则和好后缀规则
 * @param haystack
 * @param needle
 * @returns
 */
function strStr3(haystack: string, needle: string) {
  const [n, m] = [haystack.length, needle.length];
  // 生成得到坏字符列表
  const badCharList: number[] = new Array(256).fill(-1);
  for (let i = 0; i < m; i++) {
    badCharList[needle[i].charCodeAt(0)] = i;
  }
  // 生成 suffixList 和 prefixList 记录“不同好后缀的位置”和“不同好后缀是否与前缀匹配”
  // 后缀子串有 (meedle.length - 1) 个，根据长度记录到数组中，最大长度为 needle.length - 1，所以下标最大为 needle.length - 1
  const suffixList = new Array(m).fill(-1);
  const prefixList = new Array(m).fill(false);
  for (let i = 0; i < m - 1; i++) {
    let k = 1;
    let j = i;
    while (j >= 0 && needle[j] === needle[m - k]) {
      suffixList[k] = j;
      k += 1;
      j -= 1;
    }
    if (j === -1) prefixList[k - 1] = true;
  }

  const moveByGoodChar = (
    j: number,
    m: number,
    suffix: number[],
    prefix: boolean[]
  ): number => {
    let k = m - 1 - j;
    if (suffix[k] != -1) return j - suffix[k] + 1;
    for (let r = j + 2; r < m - 1; r++) {
      if (prefix[m - r] === true) {
        return r;
      }
    }
    return m;
  };

  // 正式开始匹配
  let i = 0;
  while (i <= n - m) {
    let j: number;
    for (j = m - 1; j >= 0; j--) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j < 0) return i;
    // 通过坏字符规则求偏移量 x
    const x = j - badCharList[haystack[i + j].charCodeAt(0)];
    // 通过好后缀规则求偏移量 y
    let y = 0;
    if (j < m - 1) {
      let k = m - 1 - j;
      if (suffixList[k] != -1) {
        // 匹配到好后缀的情况下
        y = j - suffixList[k] + 1;
      } else {
        // 没有匹配到好后缀的情况下
        y = moveByGoodChar(j, m, suffixList, prefixList);
      }
    }
    i += Math.max(x, y);
  }
  return -1;
}
