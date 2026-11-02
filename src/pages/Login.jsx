import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();

  function formSubmit() {
    alert('Logged in Successfully')
  }
  return (
    <div className='Form-page'>
      <h3>Welcome Back to AuctionVistas</h3>
      <p>Sign in to discover exclusive auctions and make your winning bid.</p>
      <form onSubmit={handleSubmit(formSubmit)}>
        <input type='email'
          id='email'
          placeholder='Enter email'
          autoFocus
          {...register('email', {
            required: 'Email is Required'
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input type='password'
          id='password'
          placeholder='Enter your password'
          {...register('password', {
            required: 'Password is required.',
            minLength: {
              value: 8,
              message: 'Password must contain at least 8 characters.'
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <h4 id='error'></h4>
        <button>Login</button>
        <small>New to AuctionVistas? <Link to='/register'>Create an account</Link></small>
      </form>
    </div>
  )
}

<script src='src/script/Login.js'></script>

export default Login
