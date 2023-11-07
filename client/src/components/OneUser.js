import React from 'react'
import '../styles/OneUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const OneUser = () => {
  return (
    <div className='user-card'>
        <div className='profession'><span>Science</span></div>
        <div className='user-details' >
            <div className='image-frame-one-user'>
              <img src='https://lippianfamilydentistry.net/wp-content/uploads/2015/11/user-default.png'/>
            </div>
            <h4>Jhon Doe</h4>
            <h6 className='user-email' >jhondoe@gmail.com</h6>
        </div>
        <div className='one-user-buttons' >
            <div className='user-button' ><FontAwesomeIcon icon={faEnvelope} className='user-icons' /></div>
            <div className='user-button' ><FontAwesomeIcon icon={faPhone} className='user-icons' /></div>
            <div className='user-button' ><FontAwesomeIcon icon={faEllipsis} className='user-icons' /></div>
        </div>
    </div>
  )
}

export default OneUser