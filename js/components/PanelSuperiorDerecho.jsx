import incognito from '../assets/parte superior/ayuda.png'
import flechaDerecha from '../assets/flecha-derecha.png'
import seguridad from '../assets/parte superior/seguridad.png'
import cerrar from '../assets/parte superior/cerrar.png'

export const PanelSuperiorDerecho = () => {
  return (
    <div className='grid grid-cols-4 gap-3'>
        <div className='col-start-1 col-end-3'>
            <img src={incognito} alt="incognito" className='ml-28 mb-10' />
            <p className='font-normal text-2xl mb-3'>¿Necesita <b>Ayuda</b>?</p>

            <div className='border-r-2 border-[#737373] gap-2 '>
                <a 
                  href="##" 
                  className='tracking-normal font-normal hidden md:block'
                >
                  <img src={flechaDerecha} alt="flecha" className='inline-block mr-2' />
                  ¿Olvidó o bloqueó su clave?
                </a>
                <a 
                  href="##" 
                  className='tracking-normal font-normal hidden md:block'
                >
                  <img src={flechaDerecha} alt="flecha" className='inline-block mr-2' />
                  Recomendaciones de seguridad
                </a>
                <a 
                  href="##" 
                  className='tracking-normal font-normal hidden md:block'
                >
                  <img src={flechaDerecha} alt="flecha" className='inline-block mr-2' />
                  Davivienda Móvil
                </a>
                
            </div>

        </div>
        <div className='col-start-3 col-end-5 pr-20'>
            <img className='ml-28' src={seguridad} alt="" />
            <div className='flex justify-end'>
              <img className='right-0' src={cerrar} alt="" />
            </div>

            <div className='flex flex-col gap-5 items-center'>
              <p className='font-normal tracking-normal text-2xl'>Una nueva herramienta <br/> <b>Antifraude</b> ha llegado</p>
              <div className='flex'>
                <button className='btnRed bgRed px-7 pt-2 pb-3 rounded-lg text-xs'>Conózcala aquí</button>
              </div>
            </div>
        </div>
    </div>
  )
}
