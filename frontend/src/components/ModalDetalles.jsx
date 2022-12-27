import React, { Fragment, useEffect, useState } from 'react'
import { Button, Modal, Spin } from 'antd'

const ModalDetalles = ({ open, setVisible1, idSolicitud }) => {
    const [visable2, setVisable2] = useState(false)
    const [estadoDetalleMiSolicitud, setEstadoDetalleMiSolicitud] = useState([""]);
    const [lideresFasesEscalamiento, setLideresFasesEscalamiento] = useState([])
    const [observacion, setObservacion] = useState("");
    const activarmodal2 = (respt) => {
        setObservacion(respt)
        setVisable2(true)
    }

    useEffect(() => {
        const arrCorreos = [];
        const arrLideres = [];


        google.script.run
            .withSuccessHandler((estadoMiSolicitud) => {
                setEstadoDetalleMiSolicitud(estadoMiSolicitud)
            })
            .misSolicitudes(idSolicitud);

        google.script.run.withSuccessHandler(res => {
            const obj = JSON.parse(res[0][6]);

            for (const key in obj) {
                if (Object.hasOwnProperty.call(obj, key)) {
                    const element = obj[key];
                    arrCorreos.push(element);
                }
            }

            google.script.run.withSuccessHandler(res => {
                setLideresFasesEscalamiento(res)
            }).buscarUsuariosPorCorreo(arrCorreos);
        }).verSolicitudesId(idSolicitud);

    }, [])


    return (
        <div>
            <Modal title="Progreso de Solicitud" open={open} onOk={() => { setVisible1(false) }}
                footer={false} onCancel={() => { setVisible1(false) }} centered={true}>
                <hr />
                <h1 style={{ color: "#008565" }}
                    className="text-xl mt-4">Aprobaciones
                </h1>

                {
                    estadoDetalleMiSolicitud[0] == "" ?
                        <Spin />
                        :
                        estadoDetalleMiSolicitud.map((element, index) => (
                            <Fragment key={index}>
                                <div className='grid grid-cols-12 space-x-5 items-center'>
                                    <div className='flex col-span-6'>
                                        {
                                            element[1] == "aprobado" ?
                                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_36_318)">
                                                        <path d="M11.0002 1.83337C5.94016 1.83337 1.8335 5.94004 1.8335 11C1.8335 16.06 5.94016 20.1667 11.0002 20.1667C16.0602 20.1667 20.1668 16.06 20.1668 11C20.1668 5.94004 16.0602 1.83337 11.0002 1.83337ZM11.0002 18.3334C6.95766 18.3334 3.66683 15.0425 3.66683 11C3.66683 6.95754 6.95766 3.66671 11.0002 3.66671C15.0427 3.66671 18.3335 6.95754 18.3335 11C18.3335 15.0425 15.0427 18.3334 11.0002 18.3334ZM15.2077 6.94837L9.16683 12.9892L6.79266 10.6242L5.50016 11.9167L9.16683 15.5834L16.5002 8.25004L15.2077 6.94837Z" fill="#04C900" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_36_318">
                                                            <rect width={22} height={22} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                :
                                                element[1] == "denegado" ?
                                                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_36_331)">
                                                            <path d="M11.0002 1.83337C5.931 1.83337 1.8335 5.93087 1.8335 11C1.8335 16.0692 5.931 20.1667 11.0002 20.1667C16.0693 20.1667 20.1668 16.0692 20.1668 11C20.1668 5.93087 16.0693 1.83337 11.0002 1.83337ZM11.0002 18.3334C6.95766 18.3334 3.66683 15.0425 3.66683 11C3.66683 6.95754 6.95766 3.66671 11.0002 3.66671C15.0427 3.66671 18.3335 6.95754 18.3335 11C18.3335 15.0425 15.0427 18.3334 11.0002 18.3334ZM14.291 6.41671L11.0002 9.70754L7.70933 6.41671L6.41683 7.70921L9.70766 11L6.41683 14.2909L7.70933 15.5834L11.0002 12.2925L14.291 15.5834L15.5835 14.2909L12.2927 11L15.5835 7.70921L14.291 6.41671Z" fill="#D90000" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_36_331">
                                                                <rect width={22} height={22} fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    :
                                                    element[1] == "pendiente" &&
                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M10.0002 0.833374C4.94016 0.833374 0.833496 4.94004 0.833496 10C0.833496 15.06 4.94016 19.1667 10.0002 19.1667C15.0602 19.1667 19.1668 15.06 19.1668 10C19.1668 4.94004 15.0602 0.833374 10.0002 0.833374ZM10.0002 17.3334C5.95766 17.3334 2.66683 14.0425 2.66683 10C2.66683 5.95754 5.95766 2.66671 10.0002 2.66671C14.0427 2.66671 17.3335 5.95754 17.3335 10C17.3335 14.0425 14.0427 17.3334 10.0002 17.3334Z" fill="#434343" />
                                                    </svg>
                                        }
                                        <h1>{element[2].split("@")[0]}</h1>
                                    </div>
                                    <h1 className='text-center col-span-4'>{element[1]}-{element[3].split("observacion:")[0]}</h1>
                                    {element[1] == "denegado" &&
                                        <button className='bg-red-700 rounded-xl px-5 justify-items-end col-span-2'
                                            onClick={() => activarmodal2(element[3].split("observacion:")[1])}>
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
                                    }
                                </div>
                            </Fragment>
                        ))
                }
            </Modal>
            <Modal title="Razon de negacion" open={visable2} onCancel={() => setVisable2(false)}
                footer={false} centered={true}>
                <hr />
                <h1>{observacion}</h1>
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