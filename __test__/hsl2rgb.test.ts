import hsl2rgb from '../src/hsl2rgb';

test('hsl2rgb', () => {
  expect(hsl2rgb([0, 0, 0])).toEqual([0, 0, 0]);

  expect(hsl2rgb([0, 0, 100])).toEqual([255, 255, 255]);

  expect(hsl2rgb([0, 0, 73])).toEqual([186, 186, 186]);

  expect(hsl2rgb([0, 0, 8])).toEqual([20, 20, 20]);
});