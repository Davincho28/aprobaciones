function buscarinfo() {
  const object = convertirobjeto(datasheetFormulariosCreados);
  return object;
}

const crearSolicitud = (...props) => {
  const data = [correo, ...props];

  sheetSolicitudes.appendRow(data);

  const { fase1 } = JSON.parse(props[5]);

  let newFace = undefined;

  if (fase1 == "jefe_inmediato") {
    dataSheetUsuarios.map((usuario) => {
      if (usuario[3] == correo) {
        newFace = usuario[5];
      }
    });
  }

  Logger.log(newFace);

  enviarNotificacion({
    email: newFace || JSON.stringify(fase1).replaceAll('"', ""),
    asunto: "¡Tienes una solicitud pendiente por gestionar!",
    tipoSolicitud: data[2],
  });

  sheetEstadoSolicitudes.appendRow([
    props[3],
    "pendiente",
    newFace || JSON.stringify(fase1).replaceAll('"', ""),
    props[0],
  ]);
};

//funcion para extraer las solicitudes en base al id
const verSolicitudesId = (id) =>
  dataSheetSolicitudes.filter((solicitud) => solicitud[4] == id);

// funcion para ver el seguimiento de las solicitudes
const informacionSolicitudes = () => {
  const solici = dataSheetSolicitudes.filter((element) => element[0] == correo);
  const soliciEstado = solici.map((element) => {
    const idsoli = element[4];
    const estadoSolicitud = dataSheetEstadoSolicitudes
      .filter((e) => idsoli == e[0])
      .pop();
    element.push(estadoSolicitud[1]);
    return element;
  });
  return soliciEstado;
};
// dataSheetSolicitudes.filter((elemento) => elemento[0] == correo);

const misSolicitudes = (id) => {
  const datos = dataSheetEstadoSolicitudes.filter((e) => e[0] == id);
  return datos;
};

//funcion ver solicitudes de lideres y (admin)
const verMisSolicitudesAsignadas = () => {
  //filtro de la solicitud en base al estado pendiente
  const dataVerMisSolicitudesPendientes = dataSheetEstadoSolicitudes.filter(
    (misSolicitudesPendientes) =>
      misSolicitudesPendientes[2] == correo &&
      misSolicitudesPendientes[1] == "pendiente"
  );
  const datosFiltrados = [];
  //agregar los datos filtrados con base al id de las dos tablas
  dataVerMisSolicitudesPendientes.map((datos) => {
    let idEstadoSolicitud = datos[0];
    let [solicitud] = verSolicitudesId(idEstadoSolicitud);
    let correoUser = solicitud[0];
    let [datosUsuario] = buscarUsuarioPorCorreo(correoUser);
    datosFiltrados.push([...datosUsuario, ...datos, ...solicitud]);
  });

  return datosFiltrados;
};

const nuevaFace = (num, nom) => nom.join("") + num;

const faseActual = (correo, fases) => {
  let prop = "";

  for (clave in fases) {
    if (fases[clave] == correo) prop = clave;
  }

  if (prop == "") {
    for (clave in fases) {
      if (fases[clave] == "jefe_inmediato") prop = clave;
    }
  }

  let numFace = prop.split("");
  let newFase = nuevaFace(+numFace.pop() + 1, numFace);
  return fases[newFase];
};

const actualizarSolicitud = (
  id,
  estadoNuevo,
  fecha,
  fases,
  tipoSolicitud,
  observacion
) => {
  let escaladoA = faseActual(correo, JSON.parse(fases));

  dataSheetEstadoSolicitudes.find((datos, index) => {
    let fila = index + 1;
    let columna = index + 1;

    if (datos[0] == id && datos[1] == "pendiente" && datos[2] == correo) {
      Logger.log(escaladoA);
      if (estadoNuevo == "aprobado") {
        sheetEstadoSolicitudes
          .getRange(`A${fila}:D${columna}`)
          .setValues([[id, estadoNuevo, correo, fecha]]);

        if (escaladoA) {
          let jefeInmediato = undefined;

          if (escaladoA == "jefe_inmediato") {
            dataSheetUsuarios.map((usuario) => {
              if (usuario[3] == correo) {
                jefeInmediato = usuario[5];
              }
            });
          }

          sheetEstadoSolicitudes.appendRow([
            id,
            "pendiente",
            jefeInmediato || escaladoA,
            fecha,
          ]);

          enviarNotificacion({
            email: jefeInmediato || escaladoA,
            asunto: "¡Tienes una solicitud pendiente por gestionar!",
            tipoSolicitud: tipoSolicitud,
          });
        }
      }
      if (estadoNuevo == "denegado") {
        sheetEstadoSolicitudes
          .getRange(`A${fila}:D${columna}`)
          .setValues([[id, estadoNuevo, correo, fecha + observacion]]);
      }
    }
  });
};
