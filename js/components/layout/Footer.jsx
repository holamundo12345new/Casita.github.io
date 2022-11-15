import React from 'react'
import vigilado from '../../assets/footer/vigilado.png'
import logo from '../../assets/footer/logo-blanco.png'

export const Footer = () => {

  return (
    <footer className='fixed bottom-0 h-[55px] bg-black w-full m-0'>
        <div className="container m-auto flex justify-center sm:justify-between items-center h-full">
          <div className='flex gap-5 items-center justify-center'>
            <div className='hidden sm:block'>
              <img src={vigilado} alt="" />
            </div>
            <p className='text-white font-normal tracking-normal'>Banco Davivienda S.A. todos los derechos reservados 2021.</p>
          </div>

          <img src={logo} alt="logo" className='hidden sm:block' />
        </div>
    </footer>
  )
}
