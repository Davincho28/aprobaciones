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

                    <Row gutter={[24, 16]} className='space-x-3 mt-11'>
                        <Link to={'/CrearSolicitud'}>
                            <Col className='border-2 border-gray-400 rounded-2xl flex flex-col items-center ml-3
                         hover:bg-gray-200 hover:border-green-700 w-[180] h-[180]'>
                                <svg width={'58px'} height={'75px'} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className='mt-7'>
                                    <path d="M50 46.5C48.067 46.5 46.5 48.067 46.5 50C46.5 51.933 48.067 53.5 50 53.5V46.5ZM62.5 53.5C64.433 53.5 66 51.933 66 50C66 48.067 64.433 46.5 62.5 46.5V53.5ZM50 63.1667C48.067 63.1667 46.5 64.7337 46.5 66.6667C46.5 68.5997 48.067 70.1667 50 70.1667V63.1667ZM62.5 70.1667C64.433 70.1667 66 68.5997 66 66.6667C66 64.7337 64.433 63.1667 62.5 63.1667V70.1667ZM37.5 46.5C35.567 46.5 34 48.067 34 50C34 51.933 35.567 53.5 37.5 53.5V46.5ZM37.5417 53.5C39.4747 53.5 41.0417 51.933 41.0417 50C41.0417 48.067 39.4747 46.5 37.5417 46.5V53.5ZM37.5 63.1667C35.567 63.1667 34 64.7337 34 66.6667C34 68.5997 35.567 70.1667 37.5 70.1667V63.1667ZM37.5417 70.1667C39.4747 70.1667 41.0417 68.5997 41.0417 66.6667C41.0417 64.7337 39.4747 63.1667 37.5417 63.1667V70.1667ZM75.6667 29.1667V79.1667H82.6667V29.1667H75.6667ZM70.8334 84H29.1667V91H70.8334V84ZM24.3334 79.1667V29.1667H17.3334V79.1667H24.3334ZM29.1667 24.3333H37.5V17.3333H29.1667V24.3333ZM62.5 24.3333H70.8334V17.3333H62.5V24.3333ZM29.1667 84C26.4973 84 24.3334 81.836 24.3334 79.1667H17.3334C17.3334 85.702 22.6313 91 29.1667 91V84ZM75.6667 79.1667C75.6667 81.836 73.5027 84 70.8334 84V91C77.3687 91 82.6667 85.702 82.6667 79.1667H75.6667ZM82.6667 29.1667C82.6667 22.6313 77.3687 17.3333 70.8334 17.3333V24.3333C73.5027 24.3333 75.6667 26.4973 75.6667 29.1667H82.6667ZM24.3334 29.1667C24.3334 26.4973 26.4973 24.3333 29.1667 24.3333V17.3333C22.6313 17.3333 17.3334 22.6313 17.3334 29.1667H24.3334ZM50 53.5H62.5V46.5H50V53.5ZM50 70.1667H62.5V63.1667H50V70.1667ZM45.8334 16H54.1667V9H45.8334V16ZM54.1667 25.6667H45.8334V32.6667H54.1667V25.6667ZM45.8334 25.6667C43.164 25.6667 41 23.5027 41 20.8333H34C34 27.3687 39.298 32.6667 45.8334 32.6667V25.6667ZM59 20.8333C59 23.5027 56.8361 25.6667 54.1667 25.6667V32.6667C60.7021 32.6667 66 27.3687 66 20.8333H59ZM54.1667 16C56.8361 16 59 18.164 59 20.8333H66C66 14.298 60.7021 9 54.1667 9V16ZM45.8334 9C39.298 9 34 14.298 34 20.8333H41C41 18.164 43.164 16 45.8334 16V9ZM37.5 53.5H37.5417V46.5H37.5V53.5ZM37.5 70.1667H37.5417V63.1667H37.5V70.1667Z" fill="#008565" />
                                </svg>
                                <h1 className='text-center text-gray-700 font-bold mt-2 mb-4'>Crear Solicitud</h1>
                            </Col>
                        </Link>

                        <Link to={'/MisSolicitudes'}>
                            <Col className='border-2 border-gray-400 rounded-2xl flex flex-col items-center
                         hover:bg-gray-200 hover:border-green-700 w-[180] h-[180]'>
                                <svg width={'58px'} height={'75px'} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className='mt-7'>
                                    <g clipPath="url(#clip0_61_15)">
                                        <path d="M83.3333 53.3253V24.1586C83.3333 19.5562 79.6023 15.8253 75 15.8253H25C20.3976 15.8253 16.6666 19.5562 16.6666 24.1586V53.3253M83.3333 53.3253V74.1586C83.3333 78.761 79.6023 82.492 75 82.492H25C20.3976 82.492 16.6666 78.761 16.6666 74.1586V53.3253M83.3333 53.3253H72.5592C71.4541 53.3253 70.3943 53.7643 69.6129 54.5457L59.5537 64.6049C58.7723 65.3863 57.7125 65.8253 56.6074 65.8253H43.3925C42.2875 65.8253 41.2276 65.3863 40.4462 64.6049L30.387 54.5457C29.6056 53.7643 28.5458 53.3253 27.4407 53.3253H16.6666" stroke="#008565" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_61_15">
                                            <rect width={100} height={100} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h1 className='text-center text-gray-700 font-bold mt-2 mb-4'>Mis Solicitudes</h1>
                            </Col>
                        </Link>

                        <Col className='border-2 border-gray-400 rounded-2xl flex flex-col items-center ml-3
                         hover:bg-gray-200 hover:border-green-700 w-[180] h-[180]'>
                            <svg width={'58px'} height={'75px'} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className='mt-7'>
                                <path d="M33.3333 16.6667H25C20.3976 16.6667 16.6666 20.3976 16.6666 25V75C16.6666 79.6024 20.3976 83.3333 25 83.3333H75C79.6023 83.3333 83.3333 79.6024 83.3333 75V25C83.3333 20.3976 79.6023 16.6667 75 16.6667H66.6666M50 12.5V45.8333M50 45.8333L62.5 33.3333M50 45.8333L37.5 33.3333M16.6666 54.1667H27.4407C28.5458 54.1667 29.6056 54.6057 30.387 55.3871L40.4462 65.4463C41.2276 66.2277 42.2875 66.6667 43.3925 66.6667H56.6074C57.7125 66.6667 58.7723 66.2277 59.5537 65.4463L69.6129 55.3871C70.3943 54.6057 71.4541 54.1667 72.5592 54.1667H83.3333" stroke="#008565" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h1 className='text-center text-gray-700 font-bold mt-2 mb-4'>Solicitudes Pendientes</h1>
                        </Col>
                        <Col className='border-2 border-gray-400 rounded-2xl flex flex-col items-center ml-3
                         hover:bg-gray-200 hover:border-green-700 w-[180] h-[180]'>
                            <svg width={'58px'} height={'75px'} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className='mt-7'>
                                <path d="M70.8334 83.3333H91.6667V75C91.6667 68.0964 86.0703 62.5 79.1667 62.5C75.185 62.5 71.6381 64.3617 69.349 67.2621M70.8334 83.3333H29.1667M70.8334 83.3333V75C70.8334 72.2657 70.3066 69.6544 69.349 67.2621M29.1667 83.3333H8.33337V75C8.33337 68.0964 13.9298 62.5 20.8334 62.5C24.8151 62.5 28.362 64.3617 30.6511 67.2621M29.1667 83.3333V75C29.1667 72.2657 29.6935 69.6544 30.6511 67.2621M30.6511 67.2621C33.723 59.5876 41.2284 54.1667 50 54.1667C58.7716 54.1667 66.2771 59.5876 69.349 67.2621M62.5 29.1667C62.5 36.0702 56.9036 41.6667 50 41.6667C43.0965 41.6667 37.5 36.0702 37.5 29.1667C37.5 22.2631 43.0965 16.6667 50 16.6667C56.9036 16.6667 62.5 22.2631 62.5 29.1667ZM87.5 41.6667C87.5 46.269 83.7691 50 79.1667 50C74.5643 50 70.8334 46.269 70.8334 41.6667C70.8334 37.0643 74.5643 33.3333 79.1667 33.3333C83.7691 33.3333 87.5 37.0643 87.5 41.6667ZM29.1667 41.6667C29.1667 46.269 25.4357 50 20.8334 50C16.231 50 12.5 46.269 12.5 41.6667C12.5 37.0643 16.231 33.3333 20.8334 33.3333C25.4357 33.3333 29.1667 37.0643 29.1667 41.6667Z" stroke="#008565" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h1 className='text-center text-gray-700 font-bold mt-2 mb-4'>Usuarios</h1>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    )
}

export default Inicio