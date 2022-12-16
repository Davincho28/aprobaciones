import React, { useState } from 'react'
import { Button, Form, Input, Pagination, } from 'antd';
import { EyeOutlined, SearchOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';

const MisSolicitudes = () => {

    const [prevPage, setPrevPage] = useState(5);
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
            fechaSolicitud: 'salu9',
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

    const filtrador = ({ buscador }) => {
        const filtrado = pruebas.filter(({ tipoSolicitud }) => tipoSolicitud == buscador)
        console.log(filtrado)
        console.log('hola mundo')
    }

    const numdatos = pruebas.slice(prevPage - 5, prevPage)

    const nextpage = (e) => {
        setPrevPage(e * 5)
    }

    return (
        <div className='w-full md:col-span-3 mr-20'>
            <h1
                className='text-gray-500 text-2xl mt-8 font-bold'
            >
                Mis Solicitudes
            </h1>
            <div className='flex mt-10'>
                <Form
                    className='flex'
                    name='buscador'
                    onFinish={filtrador}
                    autoComplete="off">
                    <Form.Item
                        name='buscador'>
                        <Input className='border-2 border-black rounded w-[662]' />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            className='border-2 ml-2 rounded-2xl bg-green-700 px-10'
                            icon={<SearchOutlined />}>
                            Buscar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='mr-8 mt-5'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th>Tipo de Solicitud</th>
                            <th>Fecha de Solicitud</th>
                            <th>Estado</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            numdatos.map(({ tipoSolicitud, fechaSolicitud, estado }, index) => (
                                <tr key={index}>
                                    <td>{tipoSolicitud}</td>
                                    <td>{fechaSolicitud}</td>
                                    <td>{estado}</td>
                                    <td>
                                        <button className="flex mx-auto items-center h-6 bg-green-600 text-white hover:bg-green-800 hover:text-black px-10 rounded-xl">
                                            <EyeOutlined />
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