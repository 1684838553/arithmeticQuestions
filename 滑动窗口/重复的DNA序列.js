/**
 * DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。
    例如，"ACGAATTCCG" 是一个 DNA序列 。
    在研究 DNA 时，识别 DNA 中的重复序列非常有用。
    给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。
    
    链接：https://leetcode.cn/problems/repeated-dna-sequences

 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const L = 10;
  const ans = [];
  const cnt = new Map();
  const n = s.length;
  for (let i = 0; i <= n - L; ++i) {
    const sub = s.slice(i, i + L); //截取长度为10的子串
    cnt.set(sub, (cnt.get(sub) || 0) + 1); //加入map中 并更新出现的次数
    if (cnt.get(sub) === 2) {
      ans.push(sub);
    }
  }
  return ans;
};
