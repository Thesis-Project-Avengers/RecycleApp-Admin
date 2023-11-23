import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGear, faRightFromBracket, faUsers ,faFlag } from '@fortawesome/free-solid-svg-icons'
import '../styles/SideBar.css'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'


const SideBar = ({view,changeView}) => {
    const [authUser, setAuthUser] = useState(null)
    const navigate = useNavigate()
    const handleLogOut = (e) => {
        e.preventDefault()
        signOut(FIREBASE_AUTH)
            .then(() => {
                console.log("logged out");
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            if (user) {
                console.log(user);
                setAuthUser(user)
            }
            else {

                setAuthUser(null)
            }

        })
    }, [])

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
                    <div className='option-item' onClick={(e) => {
                        e.preventDefault();
                        navigate('/home')
                    }} >
                        <FontAwesomeIcon icon={faBars} className='icons' />
                        <p className='option-item-text' >Overview</p>
                    </div>

                    <div className='option-item' onClick={(e) => {
                        e.preventDefault();
                        navigate('/users')
                        if(view==='userDetails'){
                            changeView('allusers');
                        }
                    }} >
               
                        <FontAwesomeIcon icon={faUsers} className='icons' />
                        <p className='option-item-text' >Users</p>
                    </div>
                    <div className='option-item' onClick={(e) => {
                        e.preventDefault();
                        navigate('/tips')
                        if(view==='tips'){
                            changeView('tips');
                        }
                    }} >
                        <FontAwesomeIcon icon="fa-regular fa-files" className='icons' />
                       
                        <p className='option-item-text' >Tips</p>
                    
                    <div className='option-item' onClick={(e) => {
                        e.preventDefault();
                        navigate('/reports')
                        
                    }} >
                        <FontAwesomeIcon icon={faFlag} className='icons' />
                        <p className='option-item-text' >Reports</p>
                    </div>
                   
                </div>
                <div className='sidebar-bottom-section' >
                    <div className='option-item2' >
                        <FontAwesomeIcon icon={faGear} className='icons2' />
                        <p className='option-item-text2' >Settings</p>
                    </div>
                    <div className='option-item2' onClick={(e) => handleLogOut(e)} >
                        <FontAwesomeIcon icon={faRightFromBracket} className='icons2' />
                        <p className='option-item-text2' >Log Out</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SideBar