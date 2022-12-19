import React, { useState } from 'react'
import { Button, Form, Input, Pagination, } from 'antd';
import { EyeOutlined, SearchOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';

const MisSolicitudes = () => {

    const [prevPage, setPrevPage] = useState(5);
    const [busqueda, setBusqueda] = useState("");
    const [filtrado, setFiltrado] = useState();
    const pruebas = [
        {
            tipoSolicitud: 'xd',
            fechaSolicitud: 'salu',
            estado: 'nose',
        },
        {
            tipoSolicitud: 'xd2',
            fechaSolicitud: 'salu2',
            estado: 'nose2',
        },
        {
            tipoSolicitud: 'xd3',
            fechaSolicitud: 'salu3',
            estado: 'nose3',
        },
        {
            tipoSolicitud: 'xd4',
            fechaSolicitud: 'salu4',
            estado: 'nose4',
        },
        {
            tipoSolicitud: 'xd5',
            fechaSolicitud: 'salu5',
            estado: 'nose5',
        },
        {
            tipoSolicitud: 'xd6',
            fechaSolicitud: 'salu6',
            estado: 'nose6',
        },
        {
            tipoSolicitud: 'xd7',
            fechaSolicitud: 'salu7',
            estado: 'nose7',
        },
        {
            tipoSolicitud: 'xd8',
            fechaSolicitud: 'salu8',
            estado: 'nose8',
        },
        {
            tipoSolicitud: 'xd9',
            fechaSolicitud: 'infiltrado',
            estado: 'nose9',
        },
        {
            tipoSolicitud: 'yaju10',
            fechaSolicitud: 'salu10',
            estado: 'nose10',
        },
        {
            tipoSolicitud: 'xd11',
            fechaSolicitud: 'salu11',
            estado: 'nose11',
        },
        {
            tipoSolicitud: 'xd12',
            fechaSolicitud: 'salu12',
            estado: 'nose12',
        },
        {
            tipoSolicitud: 'xd12',
            fechaSolicitud: 'yaju12',
            estado: 'nose12',
        },
        {
            tipoSolicitud: 'xd13',
            fechaSolicitud: 'salu13',
            estado: 'nose13',
        },
        {
            tipoSolicitud: 'xd14',
            fechaSolicitud: 'salu14',
            estado: 'nose14',
        },
        {
            tipoSolicitud: 'xd15',
            fechaSolicitud: 'salu15',
            estado: 'nose15',
        },
    ]

    const buscando = (e) => {
        setBusqueda(e.target.value)
        setFiltrado(filtrar(e.target.value));
    }
    const filtrar = (terminoBusqueda) => {
        var resultadosbusqueda = pruebas.filter((elemento) => {
            if (elemento.fechaSolicitud.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento.estado.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento
            }
        })
        return resultadosbusqueda
    }

    const numdatos = pruebas.slice(prevPage - 5, prevPage)

    const nextpage = (e) => {
        setPrevPage(e * 5)
    }

    console.log(filtrado)

    return (
        <div className='md:col-span-3 mr-20 border-2 mt-5 rounded-xl'>
            <h1
                className='text-gray-500 text-2xl mt-8 font-bold px-5'
            >
                Mis Solicitudes
            </h1>
            <div className='flex mt-10 justify-end space-x-5'>
                <div >
                    <label>Buscar: </label>
                </div>
                <div className='flex px-8'>
                    <input className='border-2 rounded-xl'
                        value={busqueda}
                        onChange={buscando}
                    />
                </div>
            </div>
            <div className='mt-10 ml-8 mr-8'>
                <table className='w-full'>
                    <thead>
                        <tr className='text-gray-500'>
                            <th>Tipo de Solicitud</th>
                            <th>Fecha de Solicitud</th>
                            <th>Estado</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !filtrado ?
                                numdatos.map(({ tipoSolicitud, fechaSolicitud, estado }, index) => (
                                    <tr key={index}>
                                        <td>{tipoSolicitud}</td>
                                        <td>{fechaSolicitud}</td>
                                        <td>{estado}</td>
                                        <td>
                                            <button className="flex mx-auto items-center h-6 bg-green-900 text-white hover:bg-green-700 hover:text-black px-5 rounded-xl">
                                                <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_53_8)">
                                                        <path d="M12.9999 7.04167C17.1058 7.04167 20.7674 9.34917 22.5549 13C20.7674 16.6508 17.1166 18.9583 12.9999 18.9583C8.88325 18.9583 5.23242 16.6508 3.44492 13C5.23242 9.34917 8.89409 7.04167 12.9999 7.04167ZM12.9999 4.875C7.58325 4.875 2.95742 8.24417 1.08325 13C2.95742 17.7558 7.58325 21.125 12.9999 21.125C18.4166 21.125 23.0424 17.7558 24.9166 13C23.0424 8.24417 18.4166 4.875 12.9999 4.875ZM12.9999 10.2917C14.4949 10.2917 15.7083 11.505 15.7083 13C15.7083 14.495 14.4949 15.7083 12.9999 15.7083C11.5049 15.7083 10.2916 14.495 10.2916 13C10.2916 11.505 11.5049 10.2917 12.9999 10.2917ZM12.9999 8.125C10.3133 8.125 8.12492 10.3133 8.12492 13C8.12492 15.6867 10.3133 17.875 12.9999 17.875C15.6866 17.875 17.8749 15.6867 17.8749 13C17.8749 10.3133 15.6866 8.125 12.9999 8.125Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_53_8">
                                                            <rect width={26} height={26} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                                :
                                filtrado.map(({ tipoSolicitud, fechaSolicitud, estado }, index) => (
                                    <tr key={index}>
                                        <td>{tipoSolicitud}</td>
                                        <td>{fechaSolicitud}</td>
                                        <td>{estado}</td>
                                        <td>
                                            <button className="flex mx-auto items-center h-6 bg-green-900 text-white hover:bg-green-700 hover:text-black px-5 rounded-xl">
                                                <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_53_8)">
                                                        <path d="M12.9999 7.04167C17.1058 7.04167 20.7674 9.34917 22.5549 13C20.7674 16.6508 17.1166 18.9583 12.9999 18.9583C8.88325 18.9583 5.23242 16.6508 3.44492 13C5.23242 9.34917 8.89409 7.04167 12.9999 7.04167ZM12.9999 4.875C7.58325 4.875 2.95742 8.24417 1.08325 13C2.95742 17.7558 7.58325 21.125 12.9999 21.125C18.4166 21.125 23.0424 17.7558 24.9166 13C23.0424 8.24417 18.4166 4.875 12.9999 4.875ZM12.9999 10.2917C14.4949 10.2917 15.7083 11.505 15.7083 13C15.7083 14.495 14.4949 15.7083 12.9999 15.7083C11.5049 15.7083 10.2916 14.495 10.2916 13C10.2916 11.505 11.5049 10.2917 12.9999 10.2917ZM12.9999 8.125C10.3133 8.125 8.12492 10.3133 8.12492 13C8.12492 15.6867 10.3133 17.875 12.9999 17.875C15.6866 17.875 17.8749 15.6867 17.8749 13C17.8749 10.3133 15.6866 8.125 12.9999 8.125Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_53_8">
                                                            <rect width={26} height={26} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
                <div className='flex'>
                    <Pagination
                        onChange={nextpage}
                        size="small"
                        total={50}
                        className="mx-auto"
                    />
                </div>
            </div>
        </div >
    )
}

export default MisSolicitudes