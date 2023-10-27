import React from 'react'
import './TermsOfServiceAgreement.css'
function TermsOfServiceAgreement({newUser, onChangeHandler}) {
  return (
    <div className='checkbox-div'>
        <span>
            <input type='checkbox' checked={newUser.agreeTermsCheckbox} name='agreeTermsCheckbox' onChange={onChangeHandler}/>
             <label htmlFor="agreeTermsCheckbox">I agree the Terms of Service</label>
        </span>
    </div>
  )
}

export default TermsOfServiceAgreement