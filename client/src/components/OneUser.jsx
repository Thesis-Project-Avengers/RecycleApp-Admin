import React from 'react'
import '../styles/OneUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLockOpen} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { FIREBASE_DB } from '../firebaseConfig'
import { useState } from 'react'
import OneTransactions from './OneTransactions'

const OneUser = ({ user, changeView }) => {
  const [userTransactions,setTransactions] = useState([])
  useEffect(() => {
    const fetchReports = async () => {
        const transactionsRef = collection(FIREBASE_DB, "transactions");
        let data = [];
        onSnapshot(transactionsRef, (snapshot) => {
            snapshot.docs.forEach((doc) => {
              if(doc.data().receiverId === user.id || doc.data().senderId === user.id )
                data.push({ ...doc.data(), id: doc.id });
            });
            setTransactions(data)
        });

    };
    fetchReports()
}, [])

console.log(userTransactions);
  return (
    <div className='oneUserContainer'>
      <h1 className='goback' onClick={() => { changeView("allusers") }}> {"<  "}Go Back</h1>
      
      <div className='userInfos'>
      
        <div className="photoSection">
          <img src={user.photoURL} alt="" />
          <h2>{user.displayName}</h2>
        </div>
        <div className="detailsSection">
          <div className="justInfo">
          <FontAwesomeIcon icon={faLockOpen} className='lock' />
            <div className="info">
              <span className='titleInfo'>
                Email :
              </span>
              <span className='theInfo'>
                {user.email}
              </span>
            </div>
            <div className="info">
              <span className='titleInfo'>
                User Id :
              </span>
              <span className='theInfo'>
                {user.id}
              </span>
            </div>
          </div>
          <div className="moreInfo">
            <div className="oneDtailinfo">
              <span className='titleInfo'>
                Mobile
              </span>
              <span className='theInfo'>
                {user.phoneNumber}
              </span>
            </div>

            <div className="oneDtailinfo">
              <span className='titleInfo'>
                Pointes
              </span>
              <span className='theInfo'>
                {user.points ? user.points : "-" }
              </span>
            </div>
            <div className="oneDtailinfo">
              <span className='titleInfo'>
                Rating
              </span>
              <span className='theInfo'>
                {user.rating}
              </span>
            </div>
            <div className="oneDtailinfo">
              <span className='titleInfo'>
                Member From 
              </span>
              <span className='theInfo'>
                {user.from ?  user.from  : "2/2/2002"}
              </span>
            </div>

            <div className="oneDtailinfo">
              <span className='titleInfo'>
                User Role 
              </span>
              <span className='theInfo'>
                {user.type ?  user.type  : "-"}
              </span>
            </div>
            <div className="oneDtailinfo">
              <span className='titleInfo'>
                User Role 
              </span>
              <span className='theInfo'>
                {user.type ?  user.type  : "-"}
              </span>
            </div>
          </div>
        </div>

      </div>
    {/* transaction && reportes  */}
    <h1 className='goback'>Transactions</h1>
    <table className='mytable'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {
            userTransactions.map((oneTransaction) =>{
              return <OneTransactions  oneTransaction={oneTransaction} userId={user.id}/>

            })
          }
        </tbody>
      </table>





    </div>
  )
}

export default OneUser