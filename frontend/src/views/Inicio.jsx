import { AuditOutlined, FolderOpenOutlined, IdcardOutlined, UserOutlined } from '@ant-design/icons'
import React, { Fragment } from 'react'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <Fragment>
            <div className="md:col-span-3 mr-20">
                <div className='ml-5'>
                    <h1 className='mt-10 text-xl font-bold text-gray-500'>
                        Tu app sistematica de Aprobaciones
                    </h1>
                    <h1 className='mt-5 text-gray-700 font-bold'>
                        Nuestra aplicación ofrece una forma sencilla de crear y optimizar todas las peticiones a diferentes solicitudes, como por ejemplo aprobaciones vacacionales y prestamos de equipos.
                    </h1>
                    <h1 className='mt-5 text-gray-700 font-bold'>
                        En nuestro menú superior izquierdo, encontrarás todas las opciones que brindamos para la creación y visualización de tus procesos.
                    </h1>
                </div>

                <div className='ml-5'>
                    <h1 className='mt-10 text-xl font-bold text-gray-500'>
                        ¿Que haras hoy?
                    </h1>

                    <Row gutter={[24, 16]} className='space-x-3 mt-4'>
                        <Link to={'/CrearSolicitud'}>
                            <Col className='border-2 border-gray-400 rounded-2xl flex flex-col items-center ml-3 
                         hover:bg-gray-200 hover:border-green-700'>
                                <AuditOutlined
                                    className='mx-14 mt-4'
                                    style={{ fontSize: '50px', color: '#00b086' }} />
                                <h1 className='text-center text-gray-700 font-bold mt-2 mb-4'>Crear Solicitud</h1>
                            </Col>
                        </Link>

                        <Link to={'/MisSolicitudes'}>
                            <Col className='border-2 border-gray-400 rounded-2xl flex flex-col items-center ml-3
                        hover:bg-gray-200 hover:border-green-700'>
                                <FolderOpenOutlined
                                    className='mx-14 mt-4'
                                    style={{ fontSize: '50px', color: '#00b086' }} />
                                <h1 className='text-center text-gray-700 font-bold mt-2 mb-4'>Mis Solicitudes</h1>
                            </Col>
                        </Link>

                        <Col className='border-2 border-gray-400 rounded-2xl flex flex-col items-center ml-3
                        hover:bg-gray-200 hover:border-green-700'>
                            <IdcardOutlined
                                className='mx-14 mt-4'
                                style={{ fontSize: '50px', color: '#00b086' }} />
                            <h1 className='text-center text-gray-700 font-bold mt-2 mb-4'>Solicitudes Pendientes</h1>
                        </Col>
                        <Col className='border-2 border-gray-400 rounded-2xl flex flex-col items-center ml-3
                        hover:bg-gray-200 hover:border-green-700'>
                            <UserOutlined
                                className='mx-14 mt-4'
                                style={{ fontSize: '50px', color: '#00b086' }} />
                            <h1 className='text-center text-gray-700 font-bold mt-2 mb-4'>Usuarios</h1>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    )
}

export default Inicio