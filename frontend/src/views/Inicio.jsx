import { AuditOutlined, FolderOpenOutlined, IdcardOutlined, UserOutlined } from '@ant-design/icons'
import React, { Fragment } from 'react'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <Fragment>
            <div className="md:col-span-3 mr-20">
                <div className='ml-16'>
                    <h1 className='mt-10 text-3xl font-bold text-gray-700'>
                        Tu App Sistemática de Aprobaciones
                    </h1>
                    <p className='mt-6 text-black font-bold'>
                        Nuestra aplicación ofrece una forma sencilla de crear y optimizar todas las peticiones a diferentes solicitudes, como por ejemplo aprobaciones vacacionales y prestamos de equipos.
                    </p>
                    <p className='mt-6 text-black font-bold'>
                        En nuestro menú superior izquierdo, encontrarás todas las opciones que brindamos para la creación y visualización de tus procesos.
                    </p>
                </div>

                <div className='ml-16 mt-[23]'>
                    <h1 className='mt-10 text-2xl font-bold text-gray-700'>
                        ¿Que haras hoy?
                    </h1>

                    <Row gutter={[24, 16]} className='space-x-3 mt-[46]'>
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