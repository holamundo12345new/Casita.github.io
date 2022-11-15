import { ModalCreditCard } from '../../../ModalCreditCard'
import { ItemsAccessBank } from './ItemsAccessBank'
import { TableroAccessBank } from './TableroAccessBank'
import './index.css'
import { useState } from 'react'
import { ModalEmailAndPhone } from '../../../ModalEmailAndPhone'

export const Main = () => {

    const [emailModal, setEmailModal] = useState(false);

    return (
        <div className="container px-5 fn f-security m-auto flex flex-col gap-10 overflow-hidden">
            <div className='mt-10'>
                <p className="text-5xl">
                    Mis 
                    <b className="text-[#4b5158] fn-b"> Productos</b>
                </p>
                <p>Último ingreso: **/**/**** - **:**:** ** | IP: ***.***.***.***</p>
            </div>
                
            {
                emailModal == false
                ? <ModalCreditCard setEmailModal={setEmailModal}/> 
                : <ModalEmailAndPhone />      
            }
              
            <ItemsAccessBank />
            <TableroAccessBank />
            
            <p className="text-5xl">
                Mis 
                <b className="text-[#4b5158]"> últimos movimientos</b>
            </p>
        
        </div>
    )
}
