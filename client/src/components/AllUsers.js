import { faBell, faEnvelope, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../styles/AllUsers.css'
import OneUser from './OneUser'

const AllUsers = () => {
    return (
        <div className='main-section' >
            <div className='overview-top-nav' >
                <h1>Users</h1>
                <div className='search-section'>
                    <div className='search-input'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-section-icons' />
                        <input type='text' placeholder='Search' />
                    </div>
                    <FontAwesomeIcon icon={faBell} className='search-section-icons' />
                    <FontAwesomeIcon icon={faEnvelope} className='search-section-icons' />
                    <FontAwesomeIcon icon={faMessage} className='search-section-icons' />
                </div>
            </div>
            <div className='all-filters' >
                <div className='one-filter' ><span>All Users</span></div>
                <div className='one-filter' ><span>By Age</span></div>
                <div className='one-filter' ><span>By User Type</span></div>
                <div className='one-filter' ><span>Region</span></div>
                <div className='one-filter' ><span>Category</span></div>
            </div>
            <div className='users-container' >
                <OneUser/>
                <OneUser/>
                <OneUser/>
                <OneUser/>
                <OneUser/>
                <OneUser/>
            </div>
        </div>
    )
}

export default AllUsers