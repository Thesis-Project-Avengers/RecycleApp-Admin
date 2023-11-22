import React, { useCallback,  useEffect,  useState } from 'react'
import '../styles/AllTips.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEllipsisVertical, faEnvelope, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FIREBASE_DB } from '../firebaseConfig'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import OneTips from './OneTips'
const AllTips = () => {

  const [tips,setTips] = useState([])
  const [update, setUpdate] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(useCallback(() => {
    const refrence = collection(FIREBASE_DB, "Tips")
    const q = query(refrence, orderBy("createdAt", "desc"));
    getDocs(q).then((querySnapshot) => {
        const tipsData = [];
        querySnapshot.forEach((doc) => {
            const data = { id: doc.id, ...doc.data() }
            tipsData.push(data);
        });
        setTips(tipsData);
    })
    setLoading(false);
}, [update]))
if (!loading) {
 
  return (
    <div className='allTipsContent'>
    
    <div className='overview-top-nav' >
                <h1>Recycling Statistics</h1>
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
<div className='tipsBloc'>
  <div className='tips-number'>
    <h5 className='tipsAll'>Tips</h5>
    <label className='tipsAll'>15 Tips</label>
    </div>
    <div className='oneTips'>
{/* {console.log(tips)} */}
{tips.map((tip) => 
                     <div
                     key={tip.id}
                     
                   >
                    <OneTips  tip={tip} />
                    </div>
                    )} 
 </div>

</div>
</div>
   
  )
 } else {
  return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          
          <h3>Loading</h3>
      </div>

  )
}
}
export default AllTips