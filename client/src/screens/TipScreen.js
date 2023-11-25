import React, {  useEffect,  useState } from 'react'
import SideBar from '../components/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, onSnapshot } from 'firebase/firestore'
import { FIREBASE_DB } from '../firebaseConfig'
import AllTips from '../components/AllTips'
import OneTips from '../components/OneTips'
import '../styles/AllTips.css'
import { faBell, faEllipsisVertical, faEnvelope, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'
const TipScreen = () => {
  const [tips,setTips] = useState([])


useEffect(() => {
  const fetchTips = async () => {
      const tipsRef = collection(FIREBASE_DB, "Tips");
      let data = [];
      onSnapshot(tipsRef, (snapshot) => {
          snapshot.docs.forEach((doc) => {
              data.push({ ...doc.data(), id: doc.id });
          });
          setTips(data)
      });

  };
  fetchTips()

}, [])

  return (
    <div className='landing-page' >
            <SideBar/>
            <div className='overview-top-nav' >
                <h1>Tips</h1>
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
            <AllTips tips={tips}/>
            
        </div>
  )
}

export default TipScreen