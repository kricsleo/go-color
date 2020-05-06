import hex2rgb from '../src/hex2rgb';

test('hex2rgb', () => {
  expect(hex2rgb('#000')).toEqual([0, 0, 0]);

  expect(hex2rgb('#FFFFFF')).toEqual([255, 255, 255]);

  expect(hex2rgb('000')).toEqual([0, 0, 0]);

  expect(hex2rgb('FFFFFF')).toEqual([255, 255, 255]);
})