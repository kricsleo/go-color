/**
 * rgb 数组转 hsv 数组
 * @param param rgb数组
 */
export default function rgb2hsv(arr: number[]): number[] {
  let h = 0,
    s = 0,
    v = 0;
  const r = arr[0],
    g = arr[1],
    b = arr[2];
  arr.sort(function(a, b) {
    return a - b;
  });
  const max = arr[2];
  const min = arr[0];
  v = max / 255;
  if (max === 0) {
    s = 0;
  } else {
    s = 1 - min / max;
  }
  if (max === min) {
    h = 0;
  } else if (max === r && g >= b) {
    h = 60 * ((g - b) / (max - min)) + 0;
  } else if (max === r && g < b) {
    h = 60 * ((g - b) / (max - min)) + 360;
  } else if (max === g) {
    h = 60 * ((b - r) / (max - min)) + 120;
  } else if (max === b) {
    h = 60 * ((r - g) / (max - min)) + 240;
  }
  return [h, s * 100, v * 100];
}