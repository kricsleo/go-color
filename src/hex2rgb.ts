
/**
 * hex 转 rgb 数组
 * @param hex 十六进制颜色
 */
export default function hexToRgb(hex: string): number[] {
  let newHex = hex.trim();
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  newHex = newHex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : null;
}