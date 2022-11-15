import React, { useState } from 'react'
import logo from '../../assets/logo-davivienda.png'
import personaIcono from '../../assets/personas.png'
import empresaIcono from '../../assets/empresas.png'
import loginIcono from '../../assets/login.png'
import flechaDerecha from '../../assets/flecha-derecha.png'
import icoIndicador from '../../assets/ico-indicador.png'

import aquiPuedo from '../../assets/aquiPuedo.png'
import pse from '../../assets/wcm.png'
import locationIcon from '../../assets/wcm2.png'
import { PanelSuperior } from '../PanelSuperior'

export const Header = () => {

  return (
    <div className='fixed z-50 w-full'>
      <PanelSuperior  />
      <div className='bgRed md:h-[95px]'>
        <div className='px-10 sm:px-20 flex md:gap-7 flex-col md:flex-row relative items-center justify-between h-full m-auto'>
          <img className='pt-6 md:py-0 md:h-[28px] md:w-[288px]' src={logo} alt="" />

          {/* PC */}
          <div className='text-lg mt-6 gap-6 hidden md:flex md:m-0'>
            <p className='text-white flex gap-2 col-span-0 items-baseline text-lg'>
              <div>
                <img src={personaIcono} alt="" className='h-[23px]' />
              </div>

              PERSONAS

              <img src={icoIndicador} className='absolute bottom-0 ml-17 ' alt="" />
            </p>
            
            <p className='text-white flex gap-2'>
              <div>
                <img src={empresaIcono} alt="" className='h-[23px]' />
              </div>
              EMPRESAS
            </p>
          </div>
          
          {/* TODO: CELULAR */}
          <div className='mt-6 gap-6 grid w-full grid-cols-2 justify-between md:m-0 md:hidden'>
            <p className='text-white flex  gap-2 col-span-0'>
              <div>
                <img src={personaIcono} alt="" />
              </div>

              PERSONAS
            </p>
            
            <p className='text-white flex gap-2 justify-end'>
              <div>
                <img src={empresaIcono} alt="" />
              </div>
              EMPRESAS
            </p>
          </div>


          <hr className='block border-1 w-full opacity-[0.3] mt-2 md:hidden' />
          <div className='flex md:flex-col text-white gap-1 py-2 md:py-0' >
            <a 
              href="##" 
              className='font-normal text-sm'
            >
              <img src={flechaDerecha} alt="flecha" className='inline-block mr-2' /> 
              ¿Quiénes somos?
            </a>
            <a 
              href="##" 
              className='font-normal hidden md:block text-sm'
            >
              <img src={flechaDerecha} alt="flecha" className='inline-block mr-2' />
              ¿Información para inversionistas?
            </a>
            <a 
              href="##" 
              className='font-normal hidden md:block text-sm'
            >
              <img src={flechaDerecha} alt="flecha" className='inline-block mr-2' />
              ¿Información adicional?
            </a>
          </div>

          {/* PC */}
          <div className='text-xl bg-[#595959] hidden h-full md:flex items-center px-3 pr-8'>
            <button 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarToggleExternalContent" 
              aria-controls="navbarToggleExternalContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
              className='flex items-center text-white gap-5 leading-6 text-left '>
              <img src={loginIcono} alt="" className='h-9' />
              INGRESO <br/>CLIENTES
            </button>
          </div>
        </div>

        {/* CELULAR */}
        <div 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarToggleExternalContent" 
          aria-controls="navbarToggleExternalContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          className='cursor-pointer text-lg bg-[#595959] md:hidden h-full flex items-center justify-center px-3 sm:pr-8 py-2 w-full'>
          <p className='flex items-center text-white gap-5'>
            <img src={loginIcono} alt="" className='h-9 absolute left-3' />
            INGRESO <br/>CLIENTES
          </p>
        </div>

      </div>

      <div className='bg-white h-[100px] sm:h-[50px] relative'>
        <div className='container px-5 m-auto flex justify-between items-center h-full'>
          <img className='absolute top-0  left-0 sm:left-auto md:p-0' src={aquiPuedo} alt="aquiPuedo" />
          <div></div>
          <div className='flex flex-col sm:flex-row items-center gap-2 '>
            <div className='flex items-center'>
              <img src={pse} alt="pse" className='h-[32px]' />
              <p className='text-[#c1191f] tracking-normal'>Pagos en línea y PSE</p>
            </div>
            <div className='flex items-center sm:hidden'>
              <img src={locationIcon} alt="pse" className='h-[38px]' />
              <p className='text-[#595959] tracking-normal'>Visitar una oficina</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
