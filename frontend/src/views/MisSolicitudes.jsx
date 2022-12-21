import React, { useState } from 'react'
import { Button, Form, Input, Pagination, } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import ModalDetalles from '../components/ModalDetalles';

const MisSolicitudes = () => {

    const [prevPage, setPrevPage] = useState(5);
    const [busqueda, setBusqueda] = useState("");
    const [filtrado, setFiltrado] = useState();
    const [visible1, setVisible1] = useState(false);
    const [idSolicitud, setIdSolicitud] = useState("");
    const pruebas = [
        {
            tipoSolicitud: "nose",
            fechaSolicitud: "loquesea",
            estado: "tistes"
        },
        {
            tipoSolicitud: "nose",
            fechaSolicitud: "loquesea",
            estado: "tistes"
        },
        {
            tipoSolicitud: "nose",
            fechaSolicitud: "loquesea",
            estado: "tistes"
        },
        {
            tipoSolicitud: "nose",
            fechaSolicitud: "loquesea",
            estado: "tistes"
        },
        {
            tipoSolicitud: "nose",
            fechaSolicitud: "loquesea",
            estado: "tistes"
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
            <ModalDetalles open={visible1} setVisible1={setVisible1} idSolicitud={idSolicitud} />
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
                {
                    pruebas ?
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
                                                    <button className="flex mx-auto items-center h-6 bg-green-900 text-white hover:bg-green-700 hover:text-black px-5 rounded-xl"
                                                        onClick={() => setVisible1(true)}>
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
                        :
                        <div>
                            <table className='w-full'>
                                <thead>
                                    <tr className='text-gray-500'>
                                        <th>Tipo de Solicitud</th>
                                        <th>Fecha de Solicitud</th>
                                        <th>Estado</th>
                                        <th>Detalle</th>
                                    </tr>
                                </thead>
                            </table>
                            <div className='pt-5 pb-28'>
                                <svg width={207} height={207} viewBox="0 0 207 207" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className='mx-auto mt-5'>
                                    <path d="M203.072 64.5677L108.467 1.49717C105.237 -0.489951 101.791 -0.508145 98.5326 1.49717L3.92733 64.5677C1.50156 66.1845 0 69.0728 0 71.9603V135.03C0 137.918 1.50156 140.806 3.92774 142.423L98.533 205.503C101.762 207.49 105.208 207.508 108.467 205.503L203.072 142.423C205.498 140.807 207 137.918 207 135.03V71.9603C207 69.0728 205.498 66.1845 203.072 64.5677ZM112.394 25.5234L182.049 71.9603L150.976 92.7529L112.394 66.9931V25.5234ZM94.6053 25.5234V66.9931L56.0237 92.7529L24.9507 71.9603L94.6053 25.5234ZM17.789 88.5943L40.0831 103.496L17.789 118.397V88.5943ZM94.6053 181.468L24.9507 135.031L56.0237 114.238L94.6053 139.998V181.468ZM103.5 124.519L72.0799 103.496L103.5 82.472L134.92 103.496L103.5 124.519ZM112.394 181.468V139.998L150.976 114.238L182.049 135.031L112.394 181.468ZM189.211 118.397L166.916 103.496L189.211 88.5943V118.397Z" fill="#008565" />
                                </svg>
                                <h1 className='text-center text-xl font-bold mt-3'>No has realizado ninguna solicitud</h1>
                            </div>
                        </div>

                }

                {
                    pruebas &&
                    <div className='flex pb-3'>
                        <Pagination
                            onChange={nextpage}
                            size="small"
                            total={50}
                            className="mx-auto"
                        />
                    </div>
                }
            </div>
        </div >
    )
}

export default MisSolicitudes