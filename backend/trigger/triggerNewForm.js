function triggerNewForm(idForm) {
  ScriptApp.newTrigger("guardarDatosFormGoogle")
    .forForm(idForm)
    .onFormSubmit()
    .create();
}

function guardarDatosFormGoogle(params) {
  const correorespt = params.response.getRespondentEmail();
  const fechaSolicutud = Utilities.formatDate(new Date(), "UTC", "dd/MM/YYYY");
  const tipoSolicitud = params.source.getTitle();
  let datosSolicitud = {};
  const idSolicitud = Utilities.getUuid();
  const idFormulario = params.source.getId();
  const estadoFasesEscalamiento = consultafases(correorespt);
  // const estadoFasesEscalamiento = datasheetFormulariosCreados.find(
  //   (fila) => fila[0] == idFormulario
  // )[4];
  const itemResponses = params.response.getItemResponses();
  itemResponses.map(
    (resp) =>
      (datosSolicitud = {
        ...datosSolicitud,
        [resp.getItem().getTitle()]: resp.getResponse(),
      })
  );

  sheetSolicitudes.appendRow([
    correorespt,
    fechaSolicutud,
    tipoSolicitud,
    JSON.stringify(datosSolicitud),
    idSolicitud,
    idFormulario,
    estadoFasesEscalamiento,
  ]);

  const liderEscalamiento = JSON.parse(estadoFasesEscalamiento).fase1;

  sheetEstadoSolicitudes.appendRow([
    idSolicitud,
    "pendiente",
    liderEscalamiento,
    fechaSolicutud,
  ]);

  enviarNotificacion({
    email: liderEscalamiento,
    asunto: "Tiene una solicitud asignada",
    tipoSolicitud,
  });
}
