import React from 'react'
import Loguer from './loadings/Loguer';
import Inicio from './views/Inicio';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";
import MenuDrawer from './components/MenuDrawer';
import CrearSolicitud from './views/CrearSolicitud';
import MisSolicitudes from './views/MisSolicitudes';


const App = () => {
    return (
        <Router>
            <div className='max-h-screen'>
                <div className="grid md:grid-cols-4 grid-cols-2">
                    <MenuDrawer />
                    <Routes>
                        <Route path='/' element={<Loguer />}></Route>
                        <Route path='/inicio' element={<Inicio />}></Route>
                        <Route path='/CrearSolicitud' element={<CrearSolicitud />}></Route>
                        <Route path='/MisSolicitudes' element={<MisSolicitudes />}></Route>
                    </Routes>
                </div>
            </div>
        </Router >
    )
}

export default App