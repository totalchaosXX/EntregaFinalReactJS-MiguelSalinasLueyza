
import { useState } from 'react'
import './Login.scss'


const Login = () => {

   const [values, setValues] = useState({
    email:'',
    password:''
   })

   const handleInputChange = (e) => {
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
   }

    const handleSubmit = (e) => {
    
        e.preventDefault()

    }

    return (
     
        <div className='auth-container'>
            <div className='auth-modal'>
                <h2>Login</h2>
                <hr />

                <form onSubmit={handleSubmit}>

                    <input 
                    value={values.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder='Email'
                    className='form-control my-2'
                    name='email'
                    />

                    <input 
                    value={values.password}
                    onChange={handleInputChange}
                    type="password"
                    placeholder='Contraseña'
                    className='form-control my-2'
                    name='password'
                    />

                    <button className='btn btn-primary col-12' type='submit'>Iniciar sesión</button>
                </form>
            </div>
        </div>
       
    )
}

export default Login