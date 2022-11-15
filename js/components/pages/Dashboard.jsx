import banner from '../../assets/banner.jpg'
import bannerPhone from '../../assets/celularFondo.jpg'
import flechaBoton from '../../assets/icoBoton.png'
import iconoBienvenida from '../../assets/Davivienda-iconos-2.png'
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';

export const Dashboard = () => {

  const sizeBanner = window.innerHeight;

  return (
    <>
      <Header />    
        <div 
          style={{
            height: `${sizeBanner}px`,
            background: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
          className='hidden sm:block'
        >
          <div className='flex justify-between container m-auto items-center h-full'>   
            <div className='gap-4 flex flex-col px-10'>
              <h2 className='text-6xl font-normal text-white hidden sm:block'>
                Bienvenido a <br /><b className='text-8xl'>Davivienda</b>
              </h2>
              <div>
                <button className='flex items-center gap-2 btnRed text-lg px-4 py-2 rounded-xl bgRed hover:bg-[#ad0000]'>
                  <img src={flechaBoton} alt="flechaDerecha" />
                  Conozca más
                </button>
              </div>
            </div> 

            <div className='flex-col gap-3 hidden md:flex'>

              <div className='h-[100px] w-[100px] rounded-xl bg-white justify-center items-center flex flex-col gap-1'>
                
                <div
                  style={{
                    width: '32px',
                    height: '28px',
                    backgroundPosition: '-4px -51px',
                    backgroundImage: `url(${iconoBienvenida})`,
                  }}
                  className='m-0'
                >

                </div>
                <p className='font-normal tracking-normal text-xs text-[#ed1c27]'>Bienvenido</p>
              
              </div>

              <div className='h-[100px] w-[100px] rounded-xl bg-[rgba(0,0,0,.4)] flex flex-col gap-1 justify-center items-center'>
                
                <i
                  style={{
                    width: '32px',
                    height: '28px',
                    backgroundPosition: '-4px -87px',
                    backgroundImage: `url(${iconoBienvenida})`
                  }}
                  className='m-0'
                ></i>
                

                <p className='font-normal tracking-normal text-xs text-white text-center px-2'>Apoyando a los colombianos</p>
              
              </div>
              
              <div className='h-[100px] w-[100px] rounded-xl bg-[rgba(0,0,0,.4)] flex flex-col gap-1 justify-center items-center'>
                
                <i
                  style={{
                    width: '32px',
                    height: '28px',
                    backgroundPosition: '-4px -159px',
                    backgroundImage: `url(${iconoBienvenida})`
                  }}
                  className='m-0'
                ></i>
                

                <p className='font-normal tracking-normal text-xs text-white text-center px-2'>Puntos de atención</p>
              
              </div>

              <div className='h-[100px] w-[100px] rounded-xl bg-[rgba(0,0,0,.4)] flex flex-col gap-1 justify-center items-center'>
                
                <i
                  style={{
                    width: '32px',
                    height: '28px',
                    backgroundPosition: '-4px -240px',
                    backgroundImage: `url(${iconoBienvenida})`
                  }}
                  className='m-0'
                ></i>
                

                <p className='font-normal tracking-normal text-xs text-white text-center px-2'>Seguridad Davivienda</p>
              
              </div>
            

            </div>
          </div>
        </div>
        <div 
          style={{
            height: `${sizeBanner}px`,
            background: `url(${bannerPhone})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
          }}
          className='block sm:hidden'
        >
          <div className='flex justify-between container m-auto items-center h-full'>   
            <div className='gap-4 flex flex-col px-10'>
              <h2 className='text-xl font-extralight text-white tracking-normal drop-shadow leading-3 mt-14'>
                
                Para qué billetera,<br /><b className=' drop-shadow font-bold text-2xl tracking-normal'>si pago con Apple Pay.</b>
              </h2>
              <div>
                <button className='flex items-center gap-2 btnRed text-lg px-4 py-2 rounded-xl bgRed hover:bg-[#ad0000]'>
                  <img src={flechaBoton} alt="flechaDerecha" />
                  Conozca más
                </button>
              </div>
            </div> 

            <div className='flex-col gap-3 hidden md:flex'>

              <div className='h-[100px] w-[100px] rounded-xl bg-white justify-center items-center flex flex-col gap-1'>
                
                <div
                  style={{
                    width: '32px',
                    height: '28px',
                    backgroundPosition: '-4px -51px',
                    backgroundImage: `url(${iconoBienvenida})`,
                  }}
                  className='m-0'
                >

                </div>
                <p className='font-normal tracking-normal text-xs text-[#ed1c27]'>Bienvenido</p>
              
              </div>

              <div className='h-[100px] w-[100px] rounded-xl bg-[rgba(0,0,0,.4)] flex flex-col gap-1 justify-center items-center'>
                
                <i
                  style={{
                    width: '32px',
                    height: '28px',
                    backgroundPosition: '-4px -87px',
                    backgroundImage: `url(${iconoBienvenida})`
                  }}
                  className='m-0'
                ></i>
                

                <p className='font-normal tracking-normal text-xs text-white text-center px-2'>Apoyando a los colombianos</p>
              
              </div>
              
              <div className='h-[100px] w-[100px] rounded-xl bg-[rgba(0,0,0,.4)] flex flex-col gap-1 justify-center items-center'>
                
                <i
                  style={{
                    width: '32px',
                    height: '28px',
                    backgroundPosition: '-4px -159px',
                    backgroundImage: `url(${iconoBienvenida})`
                  }}
                  className='m-0'
                ></i>
                

                <p className='font-normal tracking-normal text-xs text-white text-center px-2'>Puntos de atención</p>
              
              </div>

              <div className='h-[100px] w-[100px] rounded-xl bg-[rgba(0,0,0,.4)] flex flex-col gap-1 justify-center items-center'>
                
                <i
                  style={{
                    width: '32px',
                    height: '28px',
                    backgroundPosition: '-4px -240px',
                    backgroundImage: `url(${iconoBienvenida})`
                  }}
                  className='m-0'
                ></i>
                

                <p className='font-normal tracking-normal text-xs text-white text-center px-2'>Seguridad Davivienda</p>
              
              </div>
            

            </div>
          </div>
        </div>
      <Footer/>

    </>
  )
}
