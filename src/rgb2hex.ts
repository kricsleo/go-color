
/**
 * hex 十六进制颜色
 * @param arr rgb 数组
 */
export default function rgb2hex([r, g, b]: number[]): string {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}