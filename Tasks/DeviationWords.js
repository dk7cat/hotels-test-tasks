const deviationWordsByCount = (count) => {
  if (count % 10 === 1) {
    return `${count} компьютер`;
  }
  if (count % 10 >= 2 && count % 10 <= 4) {
    return `${count} компьютера`;
  }
  return `${count} компьютеров`;
};
