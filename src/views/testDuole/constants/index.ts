export function parseCardInput(input: string): string {
  const tokens = input.trim().toUpperCase().split(/\s+/); // 按空格分词
  let result = "";

  for (const token of tokens) {
    const match = token.match(/^(\d+)([A-Z])$/);
    if (match) {
      const [, countStr, card] = match;
      const count = parseInt(countStr, 10);
      result += card.repeat(count);
    } else {
      // 兼容原始输入，如 "aa"、"KKK"、"DXY"
      result += token;
    }
  }
  return result;
}
