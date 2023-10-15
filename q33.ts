function getOrdinal(number: number): string {
    if (number === 1) {
      return `${number}st`;
    } else if (number === 2) {
      return `${number}nd`;
    } else if (number === 3) {
      return `${number}rd`;
    } else {
      return `${number}th`;
    }
  }
  
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  for (const number of numbers) {
    const ordinal = getOrdinal(number);
    console.log(ordinal);
  }
  