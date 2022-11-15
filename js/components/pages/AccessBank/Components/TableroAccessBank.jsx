import icon1 from './assets/icons/icono-01.png'

export const TableroAccessBank = () => {
  return (
    <div className='grid grid-cols-9'>
            
        <div className='bg-[#c21920] col-start-1 col-end-3 gap-3 py-10 rounded-l-lg'>
            <img src={icon1} alt="" className='mx-auto mb-4 h-20' />

            <div className='flex flex-col justify-center items-center gap-2'>
                <button className='w-32 bg-white px-2 py-2 rounded-xl tracking-normal btnGray' >Pagar</button>
                <button className='w-32 bg-white px-2 py-2 rounded-xl tracking-normal btnGray' >Transferir</button>
                <button className='w-32 bg-white px-2 py-2 rounded-xl tracking-normal btnGray' >Mis pagos automáticos</button>
                <button className='w-32 bg-white px-2 py-2 rounded-xl tracking-normal btnGray' >Abrir productos en linea</button>
                <button className='w-32 bg-white px-2 py-2 rounded-xl tracking-normal btnGray' >Mis operaciones internacionales</button>
            </div>
            
        </div>
        
        <div className='bg-[#f1f1f1] col-start-3 col-end-10 rounded-r-lg flex justify-between p-10'>

                <div>
                    <p className='text-[#ad0000]'>
                        Cuenta de *******
                    </p>
                    <p>
                        Cuenta de ******* ******
                    </p>
                </div>

                <div>
                    <p>Saldo disponible</p>
                    $***.**
                </div>

                <div>
                    <p>Saldo en Canje</p>
                    <p>$***.**</p>
                </div>

                <div>
                    <p>Saldo Bolsillos</p>
                    <p>$***.**</p>
                </div>
                
                <div>
                    <p>Saldo Total</p>
                    <p>$***.**</p>
                </div>

        </div>
    </div>
  )
}
