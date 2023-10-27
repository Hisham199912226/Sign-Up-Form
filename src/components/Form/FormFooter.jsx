import React from 'react'
import './FormFooter.css'
import ErrorMessage from './ErrorMessage'
function FormFooter({errorMessage}) {
  return (
    <div className='form-footer'>
      <ErrorMessage errorMessage={errorMessage}/>
      <button className='sign-up-button'>Sign Up</button>
    </div>
  )
}

export default FormFooter