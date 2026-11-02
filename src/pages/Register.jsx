import React from 'react'
import { useForm, Watch } from 'react-hook-form'
import { Link } from 'react-router-dom';

const Register = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm();

  function formSubmit() {
    alert('Registered Successful');
    reset();
  }

  return (
    <div className='Form-page'>
      <h3>Join AuctionVistas Today</h3>
      <p>Create your account to explore exclusive auctions and take your first step toward winning.</p>
      <form onSubmit={handleSubmit(formSubmit)}>
        <input type="text"
          placeholder='Enter UserName'
          autoFocus
          {...register('name', {
            required: 'UserName is Mandatory',
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input type='email'
          placeholder='Enter Email'
          {...register('email', {
            required: 'Email is Required',
            pattern: {
              value: /^[A-Za-z0-9]+@gmail\.com$/,
              message: 'Oops! Please check your email address and try again.'
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input type='password'
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

        <input type='password'
          placeholder='Confirm your password'
          {...register('confirm-password', {
            required: 'Passwords do not match. Please try again.',
            validate: (value) =>
              value === Watch('password') || 'Passwords do not match.'
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button>Create Account</button>
        <small>Already have an account? <Link to='/login'>Login</Link></small>
      </form>
    </div>
  )
}

export default Register
