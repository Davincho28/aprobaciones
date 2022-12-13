function recordatorioSemanal() {
  dataSheetSolicitudes.shift();

  dataSheetSolicitudes.map((solicitud) => {
    const correoSolicitud = solicitud[0];
    const idSolicitud = solicitud[4];
    const tipoSolicitud = solicitud[2];
    const fechaSolicitud = solicitud[1];


    const fechaSolicitudMili = new Date(fechaSolicitud).getTime();
    const fechaActual = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();
    const semanaMili = 86400000 * 7;
    const fechaPasadoSemana =
      new Date(fechaSolicitudMili + semanaMili).getDate() + "/" +
      (new Date(fechaSolicitudMili + semanaMili).getMonth() + 1) + "/" +
      new Date(fechaSolicitudMili + semanaMili).getFullYear();

    if (fechaActual == fechaPasadoSemana) {

      const estadoSolicitudesFiltradas = dataSheetEstadoSolicitudes.filter(
        (estadoSolicitud) => idSolicitud == estadoSolicitud[0]
      );

      const estadoUltimaSolicitud = estadoSolicitudesFiltradas.pop();
      const aprobador = estadoUltimaSolicitud[2];

      if (estadoUltimaSolicitud[1] == "pendiente") {
        if (estadoUltimaSolicitud[2] == "jefe_inmediato") {
          const usuario = dataSheetUsuarios.find(
            (usuario) => usuario[3] == correoSolicitud
          );

          const jefeInmediato = usuario[5];

          enviarNotificacion({
            email: jefeInmediato,
            asunto: "¡Tienes una solicitud pendiente por gestionar!",
            tipoSolicitud,
          });
        } else {
          enviarNotificacion({
            email: aprobador,
            asunto: "¡Tienes una solicitud pendiente por gestionar!",
            tipoSolicitud,
          });
        }
      }
    }

  });
}
