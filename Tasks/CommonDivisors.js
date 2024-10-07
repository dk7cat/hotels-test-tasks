const getCommonDivisors = (numbers) => {
  const maxDivisor = Math.min(...numbers);
  let commonDivisors = [];

  for (let divisor = 2; divisor <= maxDivisor; divisor++) {
    if (numbers.every((number) => number % divisor === 0)) {
      commonDivisors.push(divisor);
    }
  }
  return commonDivisors;
};
