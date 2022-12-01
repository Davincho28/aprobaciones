import React from 'react'
import Loading1 from './Loadings/Loading1'

const Loguer = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 mt-2'>
                <div>
                    <img src="https://servinformacion.com/wp-content/uploads/2020/10/LogoServinformacion-02-1-1024x302.png"
                        height="200px"
                        width="200px"
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 text-center'>
                <h1 className='mt-20 text-3xl'><b>APROBACIONES</b></h1>
                <br />
                <h1 className='text-lg text-cyan-500'><b>Estamos iniciando tu sesion</b></h1>
            </div>
            <Loading1 />
            {/* <Wade /> */}
        </div>
    )
}

export default Loguer