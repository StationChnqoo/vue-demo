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
    }
    // fallback：原始格式（如 KKK、AA、Q）不处理数量
    result += token;
  }
  return result;
}