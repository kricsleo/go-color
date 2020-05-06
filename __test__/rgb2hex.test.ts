import rgb2hex from '../src/rgb2hex';

test('hex2rgb', () => {
  expect(rgb2hex([0, 0, 0])).toEqual('#000000');

  expect(rgb2hex([255, 255, 255])).toEqual('#ffffff');
})