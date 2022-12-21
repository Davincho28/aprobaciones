import React, { useState } from 'react'
import { Button, Modal } from 'antd'

const ModalDetalles = ({ open, setVisible1, idSolicitud }) => {
    const [visable2, setVisable2] = useState(false)
    const activarmodal2 = () => {
        setVisible1(false)
        setVisable2(true)
    }
    return (
        <div>
            <Modal title="Progreso de Solicitud" open={open} onOk={() => { setVisible1(false) }}
                footer={false} onCancel={() => { setVisible1(false) }} centered={true}>
                <hr />
                <h1 style={{ color: "#008565" }}
                    className="text-xl mt-4">Aprobaciones
                </h1>
                <button className='bg-red-700 rounded-xl px-5'
                    onClick={() => activarmodal2()}>
                    <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_53_8)">
                            <path d="M12.9999 7.04167C17.1058 7.04167 20.7674 9.34917 22.5549 13C20.7674 16.6508 17.1166 18.9583 12.9999 18.9583C8.88325 18.9583 5.23242 16.6508 3.44492 13C5.23242 9.34917 8.89409 7.04167 12.9999 7.04167ZM12.9999 4.875C7.58325 4.875 2.95742 8.24417 1.08325 13C2.95742 17.7558 7.58325 21.125 12.9999 21.125C18.4166 21.125 23.0424 17.7558 24.9166 13C23.0424 8.24417 18.4166 4.875 12.9999 4.875ZM12.9999 10.2917C14.4949 10.2917 15.7083 11.505 15.7083 13C15.7083 14.495 14.4949 15.7083 12.9999 15.7083C11.5049 15.7083 10.2916 14.495 10.2916 13C10.2916 11.505 11.5049 10.2917 12.9999 10.2917ZM12.9999 8.125C10.3133 8.125 8.12492 10.3133 8.12492 13C8.12492 15.6867 10.3133 17.875 12.9999 17.875C15.6866 17.875 17.8749 15.6867 17.8749 13C17.8749 10.3133 15.6866 8.125 12.9999 8.125Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_53_8">
                                <rect width={26} height={26} fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </Modal>
            <Modal title="Razon de negacion" open={visable2} onCancel={() => setVisable2(false)}
                footer={false} centered={true}>
                <hr />
                <h1>xd</h1>
                <div className='flex'>
                    <button className='text-xl rounded-xl px-5 border-4 mx-auto text-center border-gray-700'
                        onClick={() => setVisable2(false)}>
                        Aceptar
                    </button>
                </div>
            </Modal>
        </div>

    )
}

export default ModalDetalles