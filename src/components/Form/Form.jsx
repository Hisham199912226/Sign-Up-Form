import React from 'react'
import './Form.css'
import FormHeader from './FormHeader'
import AccountInfo from './AccountInfo'
import PersonalInfo from './PersonalInfo'
import TermsOfServiceAgreement from './TermsOfServiceAgreement'
import FormFooter from './FormFooter'
import ErrorMessage from './ErrorMessage'
function Form({newUser, onSubmitHandler, onChangeHandler, errorMessage}) {
  return (
    <div className='registeration-form'>
        <FormHeader />
        <form onSubmit={onSubmitHandler}>
            <AccountInfo newUser={newUser} onChangeHandler={onChangeHandler}/>
            <PersonalInfo newUser={newUser} onChangeHandler={onChangeHandler}/>   
            <TermsOfServiceAgreement newUser={newUser} onChangeHandler={onChangeHandler}/>
            <FormFooter errorMessage={errorMessage}/>
        </form>
    </div>
  )
}

export default Form