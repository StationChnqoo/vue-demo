export function parseCardInput(input: string): string {
  const tokens = input.trim().toUpperCase().split(/\s+/); // 按空格分词
  let result = "";

  for (const token of tokens) {
    if (token.length >= 2) {
      const card = token.slice(-1); // 最后一位是牌名
      const countStr = token.slice(0, -1); // 前面是数量
      const count = parseInt(countStr, 10);

      if (!isNaN(count) && /^[A-Z0-9]$/.test(card)) {
        result += card.repeat(count);
        continue;
      }
    } else if (token.length === 1 && /^[A-Z0-9]$/.test(token)) {
      // 单个字符，默认数量为 1
      result += token;
      continue;
    }
    // fallback：原样添加
    result += token;
  }
  return result;
}
