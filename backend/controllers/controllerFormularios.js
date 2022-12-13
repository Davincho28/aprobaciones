function agregarformulario(
  { nameproyect, description, fases_escalamiento },
  icon
) {
  //nombre del archivo
  const formulario = FormApp.create(nameproyect);
  //obtenemos id del formulario
  const idformulario = formulario.getId();
  //lo movemos a la carpeta
  DriveApp.getFileById(idformulario).moveTo(carpetadrive);
  formulario.setTitle(nameproyect);
  formulario.setDescription(description);
  const idvistaform = formulario.getPublishedUrl();

  triggerNewForm(idformulario);

  sheetFormulariosCreados.appendRow([
    idformulario,
    nameproyect,
    idvistaform,
    icon,
    JSON.stringify(fases_escalamiento),
  ]);
  const object = {
    idform: `https://docs.google.com/forms/d/${idformulario}/edit`,
    vistaform: idvistaform,
  };
  return object;
}

function dropform(url) {
  const idform = url.split("/");
  let message = "";
  const find = datasheetFormulariosCreados.find((element, index) => {
    if (element[0].toString() == idform[5].toString()) {
      DriveApp.getFileById(idform[5]).setTrashed(true);
      sheetFormulariosCreados.deleteRow(index + 1);
      message = "Eliminado";
      return element;
    } else {
      message = "Ya se ha eliminado";
    }
  });
  EliminarTriggers(idform[5]);
  return message;
}

// const guardarFormulario = (...props) => {
//   sheetFormularios.appendRow(props);
// };

// const listarFormularios = () => {
//   dataSheetFormularios.shift();
//   return dataSheetFormularios;
// };

// const actualizarFormulario = ({
//   id,
//   titulo,
//   newSchema,
//   fasesEscalamiento,
//   uiSchema,
// }) => {
//   dataSheetFormularios.map((row, index) => {
//     if (row[0] == id) {
//       const posicion = index + 1;
//       sheetFormularios
//         .getRange(`A${posicion}:E${posicion}`)
//         .setValues([[id, titulo, newSchema, fasesEscalamiento, uiSchema]]);
//     }
//   });
// };

// const eliminarFormulario = (id) => {
//   dataSheetFormularios.map((row, index) => {
//     if (row[0] == id) {
//       const posicion = index + 1;
//       sheetFormularios.deleteRow(posicion);
//     }
//   });
// };
