import { ConfigProvider } from 'antd';
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

export const DataContext = createContext({});


export function DataProvider({ children }) {

  const [auth, setAuth] = useState({
    rol: "",
  })

  const [dominio, setdominio] = useState("cargando");
  const [lideractivo, setLideractivo] = useState("");

  const [verFasesEscalamiento, setVerFasesEscalamiento] = useState(false);
  const [idFormularioEditarFasesEscalamiento, setIdFormularioEditarFasesEscalamiento] = useState("");

  const [editarFormulario, setEditarFormulario] = useState({
    newSchema: {},
    uiSchema: {}
  })

  const [eliminarFormulario, setEliminarFormulario] = useState({
    idFormulario: "",
    state: false
  })

  const [mostrarEsquema, setMostrarEsquema] = useState(false);
  const [listaLideres, setListaLideres] = useState({ correos: [], nombres: [] });

  const [listaRoles, setListaRoles] = useState([]);

  const [uiSchema, setUiSchema] = useState({})

  const [desplegableEstadoAprobacion, setDesplegableEstadoAprobacion] = useState([]);

  const [dependencias, setDependencias] = useState();


  const [fasesEscalamiento, setFasesEscalamiento] = useState({
    numero: 1,
    schema: {
    },
    verForm: true
  })

  useEffect(() => {

    google.script.run
      .withSuccessHandler((respt) => {
        setdominio(respt)
      })
      .obtenerDominio();

    google.script.run.withSuccessHandler(rol => {
      setAuth({ ...auth, rol: rol });
    }).obtenerRol();

    google.script.run
      .withSuccessHandler(setLideractivo)
      .buscarlideres()

    google.script
      .run
      .withSuccessHandler(roles =>
        setListaRoles(roles)
      )
      .desplegableRoles();

    google.script
      .run
      .withSuccessHandler(res =>
        setDesplegableEstadoAprobacion(res)
      )
      .desplegableEstadoSolitudes();
  }, [])



  const guardarListaLideres = (arrayLideres) => {
    const correos = arrayLideres.map(lider => lider[3])
    const nombres = arrayLideres.map(lider => lider[1] + " " + lider[2])

    setListaLideres({ correos, nombres, arrayLideres })

  }

  const store = {
    listaLideres, listaRoles, desplegableEstadoAprobacion, fasesEscalamiento, setFasesEscalamiento, uiSchema, setUiSchema, editarFormulario, setEditarFormulario, eliminarFormulario, setEliminarFormulario, auth, setAuth, dependencias, setDependencias, verFasesEscalamiento, setVerFasesEscalamiento,
    idFormularioEditarFasesEscalamiento, setIdFormularioEditarFasesEscalamiento, mostrarEsquema, setMostrarEsquema, dominio, setdominio, lideractivo
  }

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#00B086" }
      }}>
      <DataContext.Provider value={store}>
        {children}
      </DataContext.Provider>
    </ConfigProvider>
  )
}
