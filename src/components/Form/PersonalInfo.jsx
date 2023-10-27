import React from 'react'
import './PersonalInfo.css'
function PersonalInfo({newUser, onChangeHandler}) {
  return (
    <div className='horizontal-inputs'>
         <input type='text' value={newUser.firstName} name='firstName' required placeholder='First name' onChange={onChangeHandler}/>
         <input type='text' value={newUser.lastName} name='lastName' required placeholder='Last name' onChange={onChangeHandler}/>
    </div>
  )
}

export default PersonalInfo