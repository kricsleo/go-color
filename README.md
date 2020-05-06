# color-utils

<<<<<<< HEAD
**hex**, **rgb**和**hsv**颜色转换函数, 在做颜色变换生成衍生色的时候可以使用

## usage

```js
import { hex2rgb, rgb2hsv, hsv2rgb, rgb2hex } from 'color-utils';

const color = '#eee';
const rgb = hex2rgb(color);
const hsv = rgb2hsv(rgb);
const newHsv = [hsv[0], hsv[1] + 20, hsv[2] - 10];
const newRgb = hsv2rgb(newHsv);
const newColor = rgb2hex(newRgb);
```
=======
color convert functions
>>>>>>> 4181f2da2a093620d9105240bf44feff37d5ff24
