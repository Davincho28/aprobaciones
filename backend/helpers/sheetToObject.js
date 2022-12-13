function convertirobjeto(data) {
  const header = data.shift();
  const resultado = data.map((row, indx) => {
    const reduced = header.reduce((accumulator, currentValue, currentIndex) => {
      accumulator[currentValue] = row[currentIndex].toString();
      return accumulator;
    }, {});

    reduced.row = indx + 2;
    return reduced;
  });

  return resultado;
}
