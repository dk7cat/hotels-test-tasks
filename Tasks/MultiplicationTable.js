const printMultiplicationTable = (maxLimit) => {
  for (let i = 0; i <= maxLimit; i++) {
    let row = '';
    for (let j = 0; j <= maxLimit; j++) {
      if (i === 0 && j === 0) {
        row += ``.padStart(5, ' ');
        continue;
      }
      if (i === 0) {
        row += j.toString().padStart(6, ' ');
        continue;
      }
      if (j === 0) {
        row += i.toString().padStart(5, ' ');
        continue;
      }
      if (i * j >= 10) {
        row += (i * j).toString().padStart(5, ' ');
      } else {
        row += (i * j).toString().padStart(6, ' ');
      }
    }
    console.log(row);
  }
};
