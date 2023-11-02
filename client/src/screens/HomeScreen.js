import React from 'react'
import Hello from '../components/Hello'
import SideBar from '../components/SideBar'
import Overview from '../components/Overview'
import '../styles/HomeScreen.css'

const HomeScreen = () => {
    return (
        <div className='landing-page' >
            <SideBar/>
            <Overview/>
        </div>
    )
}

export default HomeScreen