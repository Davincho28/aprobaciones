import React, { useContext } from 'react'
import { DataContext } from './context/DataContext';
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import Loguer from './loadings/Loguer'
import Inicio from './views/Inicio';
import MenuDrawer from './components/MenuDrawer';
import CrearSolicitud from './views/CrearSolicitud';
import MisSolicitudes from './views/MisSolicitudes';

const App = () => {
    const { auth, dominio } = useContext(DataContext)
    console.log("dominio app: " + dominio)
    console.log("auth app: " + auth)
    return (
        <BrowserRouter>
            <div className='max-h-screen overflow-hidden'>
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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App