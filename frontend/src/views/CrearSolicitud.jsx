import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'

const CrearSolicitud = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState("");
    const [viewform, setViewform] = useState();
    const [Editform, setEditform] = useState();
    useEffect(() => {
        google.script.run
            .withSuccessHandler((e) => { setData(e), setLoading('cargado') })
            .buscarinfo()
    }, [])

    console.log(data.length)

    return (
        <div className='w-screen h-screen ml-24'>
            <h1
                className='text-gray-700 font-bold text-3xl mt-14'>
                Formulario de Solicitudes
            </h1>

            <div className="grid grid-cols-2 gap-4 mt-14">
                {
                    data.length > 0 ?
                        data.map((fila) => (
                            <div
                                key={fila.id_form}
                                className="bg-gray-50 shadow-xl hover:shadow-2xl cursor-pointer transition duration-300 rounded-xl border-2
                                flex w-96 h-28"
                                onClick={() => {
                                    setEditform("https://docs.google.com/forms/d/" + fila.id_form + "/edit")
                                    setViewform(fila.url_form)
                                }}
                            >
                                <svg width={60} height={60} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className='my-auto ml-9'>
                                    <path d="M60 30V40M60 40V50M60 40H70M60 40H50M43.3333 23.3333C43.3333 30.6971 37.3638 36.6667 30 36.6667C22.6362 36.6667 16.6667 30.6971 16.6667 23.3333C16.6667 15.9695 22.6362 10 30 10C37.3638 10 43.3333 15.9695 43.3333 23.3333ZM10 66.6667C10 55.621 18.9543 46.6667 30 46.6667C41.0457 46.6667 50 55.621 50 66.6667V70H10V66.6667Z" stroke="#40A38B" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h3 className="text-center text-xl my-auto ml-[27]">Requisición de personal</h3>
                            </div>
                        ))
                        :
                        <Spin size="large"
                            className='mx-auto' />
                }
            </div>
        </div>
    )
}

export default CrearSolicitud