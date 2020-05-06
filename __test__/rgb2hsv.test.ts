import rgb2hsv from '../src/rgb2hsv';

expect.extend({
  toCloseTo(received, argument) {
    return {
      pass: received.map((cur, i) => cur - argument[i]).every(cur => Math.abs(cur) <= 1),
      message: () => `expected ${received} to be close to ${argument}`
    }
  },
});

test('rgb2hsv', () => {
  expect(rgb2hsv([0, 0, 0])).toCloseTo([0, 0, 0]);
  expect(rgb2hsv([48, 48, 43])).toCloseTo([59, 10, 19]);
  expect(rgb2hsv([43, 48, 43])).toCloseTo([119, 10, 19]);
  expect(rgb2hsv([43, 48, 48])).toCloseTo([179, 10, 19]);
  expect(rgb2hsv([43, 43, 48])).toCloseTo([239, 10, 19]);
  expect(rgb2hsv([48, 43, 48])).toCloseTo([299, 10, 19]);
  expect(rgb2hsv([48, 43, 43])).toCloseTo([0, 10, 19]);
})