import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGear, faRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons'
import '../styles/SideBar.css'


const SideBar = () => {

    return (
        <div className='container'>
            <div className='sidebar-header'>
                <div className='image-frame' >
                    <img src='https://lippianfamilydentistry.net/wp-content/uploads/2015/11/user-default.png' alt='' />
                </div>
                <div className='profile-name'>
                    <p>Flen Fouleni</p>
                </div>
            </div>
            <div className='sidebar-bottom' >
                <div className='options-container'>
                    <div className='option-item' >
                        <FontAwesomeIcon icon={faBars} className='icons' />
                        <p className='option-item-text' >Overview</p>
                    </div>
                    <div className='option-item' >
                        <FontAwesomeIcon icon={faUsers} className='icons' />
                        <p className='option-item-text' >Users</p>
                    </div>
                    <div className='option-item' >
                        <FontAwesomeIcon icon={faUsers} className='icons' />
                        <p className='option-item-text' >Users</p>
                    </div>
                    <div className='option-item' >
                        <FontAwesomeIcon icon={faUsers} className='icons' />
                        <p className='option-item-text' >Users</p>
                    </div>
                </div>
                <div className='sidebar-bottom-section' >
                <div className='option-item2' >
                        <FontAwesomeIcon icon={faGear} className='icons2' />
                        <p className='option-item-text2' >Settings</p>
                    </div>
                    <div className='option-item2' >
                        <FontAwesomeIcon icon={faRightFromBracket} className='icons2' />
                        <p className='option-item-text2' >Log Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar