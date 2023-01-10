import React, { Fragment, useContext, useEffect, useState } from 'react'
import VistaForm from '../components/VistaForm';
import { GoogleOutlined, LeftOutlined } from '@ant-design/icons'
import { DataContext } from '../context/DataContext';

const CrearSolicitud = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState("");
    const [viewform, setViewform] = useState();
    const [Editform, setEditform] = useState();
    const { lideractivo } = useContext(DataContext)

    const formularios = () => {
        google.script.run
            .withSuccessHandler((e) => { setData(e), setLoading('cargado') })
            .buscarinfo()
    }

    useEffect(() => {
        formularios()
    }, [])

    console.log("Lider activo: " + lideractivo);

    return (
        <div className='md:col-span-3 mt-10 rounded-xl border-2'
            style={{ height: "75vh" }}>
            {

                !Editform ?
                    <h1
                        className='text-gray-700 font-bold text-3xl mt-12 ml-12'>
                        Formulario de Solicitudes
                    </h1>
                    :
                    <div className="flex mt-12 ml-12">
                        <LeftOutlined
                            onClick={() => {
                                setLoading("")
                                setEditform("")
                                setViewform("")
                                formularios()
                            }}
                            className='my-auto'
                            style={{
                                fontSize: '32px', color: '#008565'
                            }} />
                        <h1
                            className='text-gray-700 font-bold text-3xl ml-5'>
                            Requisición de personal
                        </h1>
                    </div>
            }

            <div className="gap-4 mt-14 ml-12 flex">
                {
                    !Editform && loading == "cargado" &&
                        data.length > 0 ?
                        data.map((fila) => (
                            (lideractivo == true & fila.visible == "lideres") | (fila.visible == "todos") &&
                            <div
                                key={fila.id_form}
                                className="bg-gray-50 shadow-xl hover:shadow-2xl cursor-pointer transition duration-300 rounded-xl border-2
                                flex w-96 h-28"
                                onClick={() => {
                                    setEditform("https://docs.google.com/forms/d/" + fila.id_form + "/edit")
                                    setViewform(fila.url_form)
                                }}
                            >
                                <img src={fila.iconos} width={50} height={50}
                                    className='my-auto ml-9' />
                                <h3 className="text-center text-xl my-auto ml-[27]">{fila.nombre_form}</h3>
                            </div>
                        ))
                        :
                        loading == "" &&
                        <GoogleOutlined spin
                            style={{ fontSize: '32px', color: "#008565" }}
                            className='mx-auto' />
                }
            </div>
            {
                Editform &&
                <VistaForm form={{ viewform, Editform }} />
            }
        </div>
    )
}

export default CrearSolicitud