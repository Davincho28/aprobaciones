const listaUsuarios = () => dataSheetUsuarios;
//funcion para actualizar el usuario
const actualizarUsuarioRegistrado = ({
  identificacion,
  nombres,
  apellidos,
  correo,
  rol,
}) => {
  //recorrer la base de datos
  dataSheetUsuarios.map((e, index) => {
    let fila = index + 1,
      columna = index + 1;
    //se busca el registro en la BD
    e[3] == correo &&
      //se busca el rango de las filas y las columnas y se reemplazan
      sheetUsuarios
        .getRange("A" + fila + ":E" + columna)
        // y se guardan
        .setValues([[identificacion, nombres, apellidos, correo, rol]]);
  });
};

//funcion para filtrar en base al correo
const buscarUsuarioPorCorreo = (correoUsuario) =>
  dataSheetUsuarios.filter((datos) => correoUsuario == datos[3]);

const buscarUsuariosPorCorreo = (arrayCorreosUsuarios) => {
  const arrayUsuariosBuscados = [];
  arrayCorreosUsuarios.map((correo) => {
    arrayUsuariosBuscados.push(
      ...dataSheetUsuarios.filter((datos) => correo == datos[3])
    );
  });

  return arrayUsuariosBuscados;
};

const obtenerRol = () => {
  const usuarioActual = dataSheetUsuarios.find(
    (usuario) => usuario[3] == correo
  );

  if (usuarioActual) {
    return usuarioActual[4];
  } else {
    return "empleado";
  }
};

const obtenerDominio = () => {
  const usuarioActual = dataSheetdominios.find(
    (dominios) => correo.split("@")[1] == dominios
  );
  if (usuarioActual) {
    const sheetdb = dataSheetUsuarios.find((usuario) => {
      if (usuario[3] == correo) {
        return usuarioActual;
      }
    });
    if (sheetdb) {
      return sheetdb[3].split("@")[1];
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const autenticar = ({ correo, contraseña }) => {
  const [usuario] = buscarUsuarioPorCorreo(correo);
  if (usuario) {
    if (usuario[6] == contraseña) {
      return { usuario, estado: true, mensaje: "Bienvenido" };
    } else {
      return { estado: false, mensaje: "Contraseña incorrecta" };
    }
  } else {
    return { estado: false, mensaje: "Usuario no encontrado" };
  }
};

const guardarNuevoUsuario = ({
  identificacion,
  nombres,
  apellidos,
  correo,
  rol,
}) => {
  sheetUsuarios.appendRow([identificacion, nombres, apellidos, correo, rol]);
};
