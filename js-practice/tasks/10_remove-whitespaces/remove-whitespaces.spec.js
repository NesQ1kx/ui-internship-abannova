// import { removeWhitespaces } from './remove-whitespaces';

describe.skip('removeWhitespaces', () => {
  it('removeWhitespaces("I am travelling down the river") should return “Iamtravellingdowntheriver”', () => {
    expect(removeWhitespaces('I am travelling down the river')).toBe('Iamtravellingdowntheriver');
  });

  it('removeWhitespaces("  I  am  travelling  down  the  river  ") should return "Iamtravellingdowntheriver"', () => {
    expect(removeWhitespaces('  I  am  travelling  down  the  river  ')).toBe('Iamtravellingdowntheriver');
  });
});
