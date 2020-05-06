import hsv2rgb from '../src/hsv2rgb';

test('hsv2rgb', () => {
  expect(hsv2rgb([0, 0, 0])).toEqual([0, 0, 0]);
  expect(hsv2rgb([59, 10, 19])).toEqual([48, 48, 43]);
  expect(hsv2rgb([119, 10, 19])).toEqual([43, 48, 43]);
  expect(hsv2rgb([179, 10, 19])).toEqual([43, 48, 48]);
  expect(hsv2rgb([239, 10, 19])).toEqual([43, 43, 48]);
  expect(hsv2rgb([299, 10, 19])).toEqual([48, 43, 48]);
  expect(hsv2rgb([359, 10, 19])).toEqual([48, 43, 43]);
  expect(hsv2rgb([459, 10, 19])).toEqual([0, 0, 0]);
})