function consultafases(correorespt) {
  const fases = dataSheetLideres.find((fila) => fila[1] == correorespt);
  let fasesescalamiento = {};
  fases[4] && (fasesescalamiento.fase1 = fases[4]);
  fases[6] && (fasesescalamiento.fase2 = fases[6]);
  fases[8] && (fasesescalamiento.fase3 = fases[8]);
  fases[10] && (fasesescalamiento.fase4 = fases[10]);
  fases[12] && (fasesescalamiento.fase5 = fases[12]);

  return JSON.stringify(fasesescalamiento);
}
