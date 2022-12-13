function userInicioSession()  {
  let userActual = Session.getActiveUser().getEmail();
  return userActual;
};


const desplegableSolitudes = () => {
  let listaSolicitudes = [];
  dataSheetDesplegables.map(
    (e, index) => index > 0 && listaSolicitudes.push(e[0])
  );
  return listaSolicitudes;
};

const desplegableRoles = () => {
  let listaRoles = [];
  dataSheetDesplegables.map((e, index) => index > 0 && listaRoles.push(e[1]));
  return listaRoles;
};

const desplegableLideres = () => {
  let listaLideres = [];
  dataSheetUsuarios.map(
    (e, index) =>
      index > 0 &&
      (e[4] == "lider" || e[4] == "administrador") &&
      e[3] != correo &&
      listaLideres.push(e[3] + ";" + e[1] + " " + e[2])
  );
  return listaLideres;
};

const desplegableEstadoSolitudes = () => {
  let listaEstadoSolicitudes = [];
  dataSheetDesplegables.map(
    (e, index) => index > 0 && listaEstadoSolicitudes.push(e[2])
  );
  return listaEstadoSolicitudes;
};
