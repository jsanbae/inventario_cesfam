import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { loginFields } from '../../constants/formFields';
import { LOGIN_USER_MUTATION } from '../../graphql/operations/auth';
import { useMutation } from '@apollo/client';
import useForm from '../../hooks/useForm';
import { ImSpinner2 } from 'react-icons/im';
import { RiLoginCircleLine } from 'react-icons/ri';

import logo from '../../assets/images/logo.png';

const fields = loginFields;

const Login = () => {
  const context = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  
  const { onChange, onSubmit, currentFormValues} = useForm(handleSubmit, {email: '',password: ''});

  const [loginUser, {isFetching}] = useMutation(LOGIN_USER_MUTATION, {
    update(cache, {data: {loginUser: userData}}) {
      context.login(userData);
      navigate('/');
    },
    onError(err) {
      console.error(err);
    },
    variables: {loginInput: currentFormValues}
  });


  async function handleSubmit(e) {

    e.preventDefault();
    // console.log(e.target.checkValidity());

    try {
      setErrorMsg("");
      
      if (!currentFormValues.email || !currentFormValues.password) {
        setErrorMsg("Todos los campos son obligatorios");
        return;
      }

      loginUser();

    } catch (error) {
      setErrorMsg("Un error de aplicacion ha ocurrido. Intente nuevamente.");
      console.error(error.message);
    }

  };

  return (

    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-md w-full space-y-8">

          <div className="flex justify-center">
            <img src={logo} alt='logo' className='h-20 w-20' />
          </div>
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Iniciar Sesión</h2>
          {/* <p className="mt-2 text-center text-sm text-gray-600">¿No tienes una cuenta aún? {" "}
            <Link to="#" className="font-medium text-purple-600 hover:text-purple-500">
              Regístrate
            </Link>
          </p> */}
          
          { 
            errorMsg.length !== 0 ? (
            <div className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-600 px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div className="py-1">
                  <svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Ha ocurrido un error</p>
                  <p className="text-sm">{errorMsg}</p>
                </div>
              </div>
            </div>
            ) : null
          }

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

            <div className="-space-y-px">
              {
                fields.map(field =>

                  <div key={`c-${field.key}`} className="my-5">

                    <label key={`label-${field.key}`} htmlFor={field.labelFor} className="sr-only">{field.labelText}</label>

                    <input
                      id={field.id}
                      key={field.key}
                      name={field.name}
                      type={field.type}
                      required={field.isRequired}
                      className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                      placeholder={field.placeholder}
                      onChange={onChange}
                    />

                  </div>

                )
              }
            </div>
          
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />

                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Recuerdame
                </label> */}
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                  ¿Olvidó su contraseña?
                </a>
              </div>

            </div>

            <button type="submit"
              formNoValidate
              disabled={isFetching}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            >
            {
              isFetching ? (
                <ImSpinner2 className="animate-spin inline-flex h-5 w-5 mr-3" />
              ) : (
                <span className="flex align-middle">
                  <RiLoginCircleLine className='mr-4 h-5 w-5'/>
                  Iniciar Sesión
                </span>
              )
            }              
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;