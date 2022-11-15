import logo from '../../../../assets/logo-davivienda.png'
export const HeaderAccessBank = () => {
  return (
    <div className='bg-[#ED1C27] py-6 fn text-white w-full'>
      <div className="container px-5 m-auto flex justify-center md:justify-between ">
          <img src={logo} alt="logo" />

          <div className='hidden md:flex gap-4'>
            <p>Bienvenido(a), *****</p>
            <p>Atención en línea</p>
            <p>Más Servicios</p>
            <p>Cerrar sesión</p>
          </div>
      </div>
    </div>
  )
}
