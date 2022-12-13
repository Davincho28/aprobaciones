
function _read(id) {
  const data = sheetFormulariosCreados.getDataRange().getValues();
  const header = data.shift();

  // Buscar todo
  const resultado = data.map(function (row, indx) {
    const reduced = header.reduce(function (
      accumulator,
      currentValue,
      currentIndex
    ) {
      accumulator[currentValue] = row[currentIndex];
      return accumulator;
    },
    {});

    reduced.row = indx + 2;
    return reduced;
  });

  // Filtrar si se pasa un id
  if (id) {
    const datoFiltrado = resultado.filter((dato) => {
      if (dato.id_form === id) {
        return true;
      } else {
        return false;
      }
    });

    return datoFiltrado.shift();
  }

  return resultado;
}
