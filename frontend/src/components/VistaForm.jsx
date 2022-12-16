import React, { useRef } from 'react'

const VistaForm = ({ form }) => {
    const ifrem = useRef();
    return (
        <div className='m-0 p-0 overflow-hidden'>
            <iframe
                width="750"
                height="3064"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                src={form.viewform + "?embedded=true&usp=sf_link"}
                ref={ifrem}
            >
            </iframe>
        </div >
    )
}

export default VistaForm