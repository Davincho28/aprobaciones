import React from 'react'
import Loading1 from './Loadings/Loading1'

const Loguer = () => {
    return (
        <div className='w-screen relative h-screen'>
            <div className='grid grid-cols-1 mt-2'>
                <div>
                    <img src="https://servinformacion.com/wp-content/uploads/2020/10/LogoServinformacion-02-1-1024x302.png"
                        height="306px"
                        width="200px"
                        className='ml-10 mt-7'
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 text-center'>
                <h1 className='mt-20 text-3xl'><b>APROBACIONES</b></h1>
                <h1 className='text-lg text-teal-600 mt-5'><b>Estamos iniciando tu sesion</b></h1>
            </div>
            <Loading1 />
            <img src="https://github.com/Davincho28/images/blob/main/Desktop%20-%20135.jpg?raw=true"
                className='absolute bottom-0 -z-10 lg:translate-y-36 w-screen'
            />
        </div>
    )
}

export default Loguer