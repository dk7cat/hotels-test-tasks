const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getNumbersIsPrimeFromRange = (start, end) => {
  let primeNumbers = [];
  for (let i = start; i <= end; i++) {
    if (isPrimse(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
};
