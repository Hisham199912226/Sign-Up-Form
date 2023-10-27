import React from 'react'
import './AccountInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser,faLock } from '@fortawesome/free-solid-svg-icons'
function AccountInfo({newUser, onChangeHandler}) {
  return (
    <div className='vertical-inputs'>
                <div className='input-field'>
                    <input type='text' value={newUser.username} name='username' required placeholder='Username' onChange={onChangeHandler}/>
                    <FontAwesomeIcon className="icon" icon={faUser} style={{
                    "color": "#dcdfe5","border-left" : "2px solid #dcdfe5", "padding-left" : "7px"}}/>
                </div>
                
                <div className='input-field'>
                    <input type='text' value={newUser.email} name='email' required placeholder='Email address' onChange={onChangeHandler}/>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} style={{
                    "color": "#dcdfe5","border-left" : "2px solid #dcdfe5", "padding-left" : "7px"}}/>
                </div>
                <div className='input-field'>
                    <input type='password' name='password' value={newUser.password} required placeholder='Password' onChange={onChangeHandler}/>
                    <FontAwesomeIcon className="icon" icon={faLock} style={{
                    "color": "#dcdfe5","border-left" : "2px solid #dcdfe5", "padding-left" : "7px"}}/>
                </div>
                <div className='input-field'>
                    <input type='password' name='confirmPassword' value={newUser.confirmPassword} required placeholder='Confirm password' onChange={onChangeHandler}/>
                    <FontAwesomeIcon className="icon" icon={faLock} style={{
                    "color": "#dcdfe5","border-left" : "2px solid #dcdfe5", "padding-left" : "7px"}}/>
                </div>
            </div>
  )
}

export default AccountInfo