import React from 'react'
import '../styles/OneUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEllipsis, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'

const OneUser = ({user}) => { 
  console.log(user);
  return (
    <div className='user-card'>
      <div className='profession'>
        <span>{user.type}</span>
      </div>
      <div className='user-details'>
        <div className='image-frame-one-user'>
          <img src={user.photoURL}  alt='' />
        </div>
          <span>{user.firstName+' '+user.lastName}</span>
          <span className="user-email">{user.email}</span>
      </div>
          <div className='one-user-buttons'>
            <div className='user-button' >
                <FontAwesomeIcon icon={faPhone}/>
            </div>
            <div className='user-button' >
                <FontAwesomeIcon icon={faMessage}/>
            </div>
            <div className='user-button' >
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
          </div>
    </div>
  )
}

export default OneUser