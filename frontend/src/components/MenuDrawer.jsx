import React from 'react'
import { HomeOutlined, AuditOutlined, FolderOpenOutlined, IdcardOutlined, UserOutlined } from '@ant-design/icons'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const MenuDrawer = () => {
    return (
        <div className="row-span-3 h-screen rounded-r-3xl bg-menudrawer w-full max-w-[306] sticky top-0">
            <img src='https://servinformacion.com/wp-content/uploads/2020/10/LogoServinformacion-02-1.png'
                className='border-b-4 border-white mx-auto mt-10'
                height="200px"
                width="220px"
            />
            <Link to={'/inicio'}>
                <div className=' flex hover:bg-cyan-800 shadow-xl hover:shadow-2xl cursor-pointer transition duration-300 rounded-xl 
                    mt-12 p-3 mr-5 ml-5 hover:font-bold '>
                    <HomeOutlined
                        style={{ fontSize: '32px', color: "white" }} />
                    <h1 className='text-center mt-2 ml-3 text-white'>Inicio</h1>
                </div>
            </Link>

            <Link to={'/CrearSolicitud'}>
                <div className=' flex hover:bg-cyan-800 shadow-xl hover:shadow-2xl cursor-pointer transition duration-300 rounded-xl 
                    mt-4 p-3 mr-5 ml-5 hover:font-bold'>
                    <AuditOutlined
                        style={{ fontSize: '32px', color: "white" }} />
                    <h1 className='text-center mt-2 ml-3 text-white'>Crear Solicitud</h1>
                </div>
            </Link>

            <Link to={'/MisSolicitudes'}>
                <div className=' flex hover:bg-cyan-800 shadow-xl hover:shadow-2xl cursor-pointer transition duration-300 rounded-xl 
                    mt-4 p-3 mr-5 ml-5 hover:font-bold'>
                    <FolderOpenOutlined
                        style={{ fontSize: '32px', color: "white" }} />
                    <h1 className='text-center mt-2 ml-3 text-white'>Mis Solicitudes</h1>
                </div>
            </Link>

            <div className=' flex hover:bg-cyan-800 shadow-xl hover:shadow-2xl cursor-pointer transition duration-300 rounded-xl 
                    mt-4 p-3 mr-5 ml-5 hover:font-bold'>
                <IdcardOutlined
                    style={{ fontSize: '32px', color: "white" }} />
                <h1 className='text-center mt-2 ml-3 text-white'>Solicitudes Pendientes</h1>
            </div>
            <div className=' flex hover:bg-cyan-800 shadow-xl hover:shadow-2xl cursor-pointer transition duration-300 rounded-xl 
                    mt-4 p-3 mr-5 ml-5 hover:font-bold'>
                <UserOutlined
                    style={{ fontSize: '32px', color: "white" }} />
                <h1 className='text-center mt-2 ml-3 text-white'>Usuarios</h1>
            </div>
        </div>
    )
}

export default MenuDrawer