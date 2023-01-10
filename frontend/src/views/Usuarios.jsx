import { Button, Pagination, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import ModalEditarUsuarios from '../components/ModalEditarUsuarios'

const Usuarios = () => {

    const [listaUsuarios, setListaUsuarios] = useState([""])
    const [actualizarTabla, setActualizarTabla] = useState(0)
    const [prevPage, setPrevPage] = useState(5);
    const [busqueda, setBusqueda] = useState("");
    const [filtrado, setFiltrado] = useState([]);
    const [loder, setLoder] = useState("cargando")
    const [datos, setDatos] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setListaUsuarios([""])
        // obteniendo informacion de los usuarios con la api de google script run
        google.script.run
            // listando a los usuarios a mostrar en la tabla
            .withSuccessHandler(res => {
                res.shift()
                setListaUsuarios(res)
                setLoder("cargado")
            })
            .withFailureHandler(err => console.log(err))
            .listaUsuarios();
    }, [actualizarTabla])

    const nextpage = (e) => {
        setPrevPage(e * 5)
    }

    const buscando = (e) => {
        setBusqueda(e.target.value)
        setFiltrado(filtrar(e.target.value));
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosbusqueda = listaUsuarios.filter((elemento) => {
            if (elemento[0].toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento[1].toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento[2].toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento[3].toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento[4].toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento
            }
        })
        return resultadosbusqueda
    }

    const editarusuario = (e) => {
        setDatos([
            e[0], e[1], e[2], e[3], e[4]
        ])
        setOpen(true);
    }

    const numdatos = listaUsuarios.slice(prevPage - 5, prevPage)
    const numdatosfiltrados = filtrado.slice(prevPage - 5, prevPage)

    return (
        <div className='md:col-span-3 border-2 mt-5 rounded-xl'>
            <div className='font-bold text-xl mt-14 ml-14 mr-2'
                style={{ color: "#434343" }}>
                Usuarios
            </div>
            <div className='grid grid-cols-2 gap-2 mt-14 ml-14 mr-2'>
                <div>
                    <Button className='text-center rounded-2xl'
                        onClick={() => { setOpen(true), setDatos(["", "", "", "", ""]) }}>
                        Nuevo Usuario
                    </Button>
                </div>

                <div className='flex mx-auto'>
                    <label className='mr-5'>Buscar: </label>
                    <input className='border-2 rounded-xl w-56'
                        value={busqueda}
                        onChange={buscando}
                    />
                </div>
            </div>

            <div>
                {
                    listaUsuarios != "" ?
                        <table className='w-11/12 mr-8 ml-8 mt-5'>
                            <thead>
                                <tr className='text-gray-500'>
                                    <th>Identificacion</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Correo</th>
                                    <th>Rol</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    filtrado.length == 0 ?
                                        numdatos.map((element) => (
                                            <tr key={element[0]}>
                                                <td>{element[0]}</td>
                                                <td>{element[1]}</td>
                                                <td>{element[2]}</td>
                                                <td>{element[3]}</td>
                                                <td>{element[4]}</td>
                                                <td>
                                                    <button
                                                        className='bg-green-800 border border-white hover:bg-green-500 hover:border-black hover:border rounded-2xl py-2 px-8'
                                                        onClick={() => editarusuario(element)}
                                                    >
                                                        <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.8883 5.74783L11.7317 6.59116L3.42667 14.8962H2.58333V14.0528L10.8883 5.74783ZM14.1883 0.229492C13.9592 0.229492 13.7208 0.321159 13.5467 0.495326L11.8692 2.17283L15.3067 5.61033L16.9842 3.93283C17.3417 3.57533 17.3417 2.99783 16.9842 2.64033L14.8392 0.495326C14.6558 0.311992 14.4267 0.229492 14.1883 0.229492ZM10.8883 3.15366L0.75 13.292V16.7295H4.1875L14.3258 6.59116L10.8883 3.15366Z" fill="white" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                        :
                                        numdatosfiltrados.map((element) => (
                                            <tr key={element[0]}>
                                                <td>{element[0]}</td>
                                                <td>{element[1]}</td>
                                                <td>{element[2]}</td>
                                                <td>{element[3]}</td>
                                                <td>{element[4]}</td>
                                                <td>
                                                    <button
                                                        className='bg-green-800 border border-white hover:bg-green-500 hover:border-black  hover:border rounded-2xl py-2 px-8'
                                                    >
                                                        <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.8883 5.74783L11.7317 6.59116L3.42667 14.8962H2.58333V14.0528L10.8883 5.74783ZM14.1883 0.229492C13.9592 0.229492 13.7208 0.321159 13.5467 0.495326L11.8692 2.17283L15.3067 5.61033L16.9842 3.93283C17.3417 3.57533 17.3417 2.99783 16.9842 2.64033L14.8392 0.495326C14.6558 0.311992 14.4267 0.229492 14.1883 0.229492ZM10.8883 3.15366L0.75 13.292V16.7295H4.1875L14.3258 6.59116L10.8883 3.15366Z" fill="white" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                        :
                        (loder == "cargando") &&
                        <div>
                            <table className='w-11/12 mr-8 ml-8 mt-5'>
                                <thead>
                                    <tr className='text-gray-500'>
                                        <th>Identificacion</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Correo</th>
                                        <th>Rol</th>
                                        <th></th>
                                    </tr>
                                </thead>
                            </table>
                            <div className='flex justify-center pb-80'>
                                <Spin />
                            </div>
                        </div>
                }

            </div>

            {
                listaUsuarios != "" &&
                <div className='flex pb-3'>
                    <Pagination
                        onChange={nextpage}
                        size="small"
                        pageSize={5}
                        total={filtrado.length > 0 ? (filtrado.length) : (listaUsuarios.length)}
                        className="mx-auto"
                    />
                </div>
            }

            {
                datos &&
                <ModalEditarUsuarios open={open} setOpen={setOpen} datos={datos} setDatos={setDatos}
                    actualizarTabla={actualizarTabla} setActualizarTabla={setActualizarTabla} />
            }

        </div>
    )
}

export default Usuarios