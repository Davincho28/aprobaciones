import { Button, Form, Input, Modal, notification, Select } from 'antd'
import React, { Fragment, useContext, useState } from 'react'
import { DataContext } from '../context/DataContext';

const ModalEditarUsuarios = ({ open, setOpen, datos, setDatos, actualizarTabla, setActualizarTabla }) => {

    const { listaRoles } = useContext(DataContext);
    const [initialValues, setinitialValues] = useState({
        "identificacion": datos[0],
        "nombres": datos[1],
        "apellidos": datos[2],
        "correo": datos[3],
        "rol": datos[4]
    })

    const formSuccess = (e) => {
        // se actualiza correctamente y se muestra la notificación
        notification.open({
            message: 'Usuario actualizado correctamente',
            description: 'En 3 segundos vera su cambio correctamente :D',
        })
        initialValues.correo == ""
            ? google.script.run
                .withSuccessHandler(() => setActualizarTabla(actualizarTabla + 1))
                .guardarNuevoUsuario(e)
            : google.script.run
                .withSuccessHandler(() => setActualizarTabla(actualizarTabla + 1))
                .actualizarUsuarioRegistrado(e)

        // se oculta el modal y los datos del estado se vuelven a null
        setOpen(false);
        setDatos(null);
    }

    return (
        <Modal open={open} title={initialValues.correo == "" ? "Nuevo Usuario" : "Editar Usuario"} centered={true}
            onCancel={() => { setDatos(null), setOpen(false) }} footer={null}>
            <div>
                <hr />
                <Form
                    className='mt-2'
                    name='crearuser'
                    layout='vertical'
                    autoComplete="off"
                    initialValues={initialValues}
                    onFinish={formSuccess}
                >
                    <Form.Item label="Identificación" name="identificacion"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su numero de documento'
                        }]}>
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item label="Nombres" name="nombres"
                        rules={[{ required: true, message: 'Por favor ingrese los nombres' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Apellidos" name="apellidos"
                        rules={[{ required: true, message: 'Por favor ingrese los apellidos' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Correo"
                        name="correo"
                        rules={[
                            { required: true, message: 'Por favor ingrese el correo' },
                            { type: "email", message: 'El formato no coincide con el de un correo valido' }
                        ]}
                    >
                        {initialValues.correo == ""
                            ? < Input />
                            : <Input readOnly disabled />
                        }
                    </Form.Item>

                    <Form.Item label="Rol" name="rol"
                        rules={[{ required: true, message: 'Por favor ingrese el rol' }]}
                    >
                        <Select>
                            {listaRoles.map((e, index) => e !== "" &&
                                <Option key={index} value={e}>
                                    {e}
                                </Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item className="text-center">
                        <Button
                            className='bg-gray-500 text-white rounded-2xl px-7'
                            htmlType='submit'>
                            {initialValues.correo == ""
                                ? "Guardar"
                                : "Actualizar"
                            }
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </Modal>
    )
}

export default ModalEditarUsuarios