import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'
import '../styles/Overview.css'

const Overview = () => {
    return (
        <div className='main-section' >
            <div className='overview-top-nav' >
                <h1>Recycling Statistics</h1>
                <div  className='search-section'>
                    <div className='search-input'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-section-icons' />
                        <input type='text' placeholder='Search' />
                    </div>
                    <FontAwesomeIcon icon={faBell}  className='search-section-icons' />
                    <FontAwesomeIcon icon={faEnvelope}  className='search-section-icons' />
                    <FontAwesomeIcon icon={faMessage}  className='search-section-icons' />
                </div>
            </div>
        </div>
    )
}

export default Overview