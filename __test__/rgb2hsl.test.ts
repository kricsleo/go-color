import rgb2hsl from '../src/rgb2hsl';

test('rgb2hsl', () => {
  expect(rgb2hsl([0, 0, 0])).toEqual([0, 0, 0]);

  expect(rgb2hsl([255, 255, 255])).toEqual([0, 0, 100]);

  expect(rgb2hsl([187, 187, 187])).toEqual([0, 0, 73]);

  expect(rgb2hsl([20, 20, 20])).toEqual([0, 0, 8]);
});