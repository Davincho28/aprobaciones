function buscarlideres() {
  const user = dataSheetLideres.find((usuario) => usuario[1] == correo);
  return !!user;
}
