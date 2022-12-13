// conexion a la base de datos
const database = SpreadsheetApp.openById(
  "1EJPQwnrCvjy_1J33uIP8SLfrz20NXRxujI-kihGfqz4"
);

// hojas de la base de datos "tablas"
const sheetFormularios = database.getSheetByName("formularios");
const sheetUsuarios = database.getSheetByName("usuarios");
const sheetSolicitudes = database.getSheetByName("solicitudes");
const sheetEstadoSolicitudes = database.getSheetByName("estado solicitudes");
const sheetDesplegables = database.getSheetByName("desplegables");
const sheetFormulariosCreados = database.getSheetByName("formularioscreados");
const sheetdominios = database.getSheetByName("dominios");
const sheetLideres = database.getSheetByName("lideres");
const carpetadrive = DriveApp.getFolderById(
  "1_iaiOkW6-gq5223nQVc9VyeYPbsFqHHc"
);

// datos de las hojas
const dataSheetFormularios = sheetFormularios.getDataRange().getDisplayValues();
const dataSheetUsuarios = sheetUsuarios.getDataRange().getDisplayValues();
const dataSheetSolicitudes = sheetSolicitudes.getDataRange().getDisplayValues();
const dataSheetdominios = sheetdominios.getDataRange().getDisplayValues();
const dataSheetLideres = sheetLideres.getDataRange().getDisplayValues();
const datasheetFormulariosCreados = sheetFormulariosCreados
  .getDataRange()
  .getDisplayValues();
const dataSheetEstadoSolicitudes = sheetEstadoSolicitudes
  .getDataRange()
  .getDisplayValues();
const dataSheetDesplegables = sheetDesplegables
  .getDataRange()
  .getDisplayValues();

const listaLideres = () => {
  const lista = dataSheetUsuarios.filter(
    (fila) => fila[4] == "lider" || fila[4] == "administrador"
  );
  return lista;
};

const correo = Session.getActiveUser().getEmail();

const obtenerCorreo = () => Session.getActiveUser().getEmail();
