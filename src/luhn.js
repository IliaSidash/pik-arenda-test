const luhn = (cardNumber) => {
  if (cardNumber.length === 0) {
    return false;
  }
  return !(
    cardNumber
      .split('')
      .map((char, index) => {
        const digit = parseInt(char);
        if ((index + cardNumber.length) % 2 === 0) {
          const digitX2 = digit * 2;

          return digitX2 > 9 ? digitX2 - 9 : digitX2;
        }
        return digit;
      })
      .reduce((a, b) => a + b, 0) % 10
  );
};

export default luhn;
