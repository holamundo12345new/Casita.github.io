import icon1 from './assets/icons/icono-01.png'
import icon2 from './assets/icons/icono-02.png'
import icon3 from './assets/icons/icono-03.png'
import icon4 from './assets/icons/icono-04.png'
import icon5 from './assets/icons/icono-05.png'
import icon6 from './assets/icons/icono-06.png'


export const ItemsAccessBank = () => {
  return (
    <div className="flex flex-col px-5 md:px-0 md:grid grid-cols-12 gap-5">
        <div className="col-start-1 col-end-3 rounded-[40px] gap-6 bg-[#f1f1f1] py-10 sm:py-6  flex justify-center flex-col items-center bgFondoMenu">
            <div>
                <img src={icon1} alt="icono1" />
            </div>
            <p 
                style={{
                    color: 'white'
                }} 
            className='text-2xl tracking-normal'
            >Resumen</p>
        </div>
        <div className="col-start-3 col-end-5 rounded-[40px] bg-[#f1f1f1] py-10 sm:py-6  flex justify-center items-center gap-3">
            <div>
                <img src={icon2} alt="icono1" />
            </div>
            <p
            className='text-2xl tracking-normal'
            >Cuentas</p>
        </div>
        <div className="col-start-5 col-end-7 rounded-[40px] bg-[#f1f1f1] py-10 sm:py-6  flex justify-center items-center gap-3">
            <div>
                <img src={icon3} alt="icono1" />
            </div>
            <p
            className='text-2xl tracking-normal'
            >Tarjetas de <br/> Crédito</p>
        </div>
        <div className="col-start-7 col-end-9 rounded-[40px] bg-[#f1f1f1] py-10 sm:py-6  flex justify-center items-center gap-3">
            <div>
                <img src={icon4} alt="icono1" />
            </div>
            <p
            className='text-2xl tracking-normal'
            >Crédito</p>
        </div>
        <div className="col-start-9 col-end-11 rounded-[40px] bg-[#f1f1f1] py-10 sm:py-6  flex justify-center items-center gap-3">
            <div>
                <img src={icon5} alt="icono1" />
            </div>
            <p
            className='text-2xl tracking-normal'
            >Inversiones</p>
        </div>
        <div className="col-start-11 col-end-13 rounded-[40px] bg-[#f1f1f1] py-10 sm:py-6  flex justify-center items-center gap-3">
            <div>
                <img src={icon6} alt="icono1" />
            </div>
            <p
            className='text-2xl tracking-normal'
            >Seguros</p>
        </div>
    </div>
  )
}
