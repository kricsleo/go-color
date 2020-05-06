/**
 * hsv 数组 转 rgb 数组
 * @param hsv hsv数组
 */
export default function hsv2rgb(hsv: number[]): number[] {
  let r, g, b;
  let h = Math.round(hsv[0]);
  const s = Math.round((hsv[1] * 255) / 100);
  const v = Math.round((hsv[2] * 255) / 100);

  if (s === 0) {
    r = g = b = v;
  } else {
    const t1 = v;
    const t2 = ((255 - s) * v) / 255;
    const t3 = ((t1 - t2) * (h % 60)) / 60;

    if (h === 360) {
      h = 0;
    }

    if (h < 60) {
      r = t1;
      b = t2;
      g = t2 + t3;
    } else if (h < 120) {
      g = t1;
      b = t2;
      r = t1 - t3;
    } else if (h < 180) {
      g = t1;
      r = t2;
      b = t2 + t3;
    } else if (h < 240) {
      b = t1;
      r = t2;
      g = t1 - t3;
    } else if (h < 300) {
      b = t1;
      g = t2;
      r = t2 + t3;
    } else if (h < 360) {
      r = t1;
      g = t2;
      b = t1 - t3;
    } else {
      r = 0;
      g = 0;
      b = 0;
    }
  }

  return [Math.round(r), Math.round(g), Math.round(b)];
}