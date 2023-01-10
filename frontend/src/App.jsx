import React, { useContext } from 'react'
import { DataContext } from './context/DataContext';
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import Loguer from './loadings/Loguer'
import Inicio from './views/Inicio';
import MenuDrawer from './components/MenuDrawer';
import CrearSolicitud from './views/CrearSolicitud';
import MisSolicitudes from './views/MisSolicitudes';
import Usuarios from './views/Usuarios';

const App = () => {
    const { auth, dominio } = useContext(DataContext)
    return (
        <BrowserRouter>
            <div className='max-h-screen overflow-y-scroll'>
                <div className="grid md:grid-cols-4 grid-cols-2 h-full">
                    {
                        dominio != 'cargando' &&
                        <MenuDrawer />
                    }
                    <Routes>
                        {
                            dominio == false | dominio == 'cargando' &&
                            <Route path="*" element={<Navigate to={"/"}></Navigate>} />
                        }
                        <Route path='/' element={<Loguer />}></Route>
                        <Route path='/inicio' element={<Inicio />}></Route>
                        <Route path='/CrearSolicitud' element={<CrearSolicitud />}></Route>
                        <Route path='/MisSolicitudes' element={<MisSolicitudes />}></Route>
                        <Route path='/Usuarios' element={<Usuarios />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App