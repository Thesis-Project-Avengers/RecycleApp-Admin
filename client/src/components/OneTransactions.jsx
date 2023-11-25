import React, { useEffect, useState } from 'react'
import { FIREBASE_DB } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowTrendDown,faArrowTrendUp} from '@fortawesome/free-solid-svg-icons'

function OneTransactions({ oneTransaction,userId }) {
    const [sender, setSender] = useState({})
    const [receiver, setReceiver] = useState({})
    const dateObject = new Date(oneTransaction.createdAt.toDate());
    const fromated = dateObject.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                setSender({})
                const refReporter = doc(FIREBASE_DB, "users", oneTransaction?.senderId)
                await getDoc(refReporter).then((snapshot) => {
                    setSender(snapshot.data());
                })
                setReceiver({})
                const refReported = doc(FIREBASE_DB, "users", oneTransaction?.receiverId)
                await getDoc(refReported).then((snapshot) => {
                    setReceiver(snapshot.data());
                })
            } catch (error) {
                console.log(error);
            }
        }


        getUserInfo()

    }, [])
    console.log(sender, receiver);
    return (
        <tr className='oneTra'>
            <th >
            <div className='arrows'>
            { oneTransaction.senderId === userId ?
                <FontAwesomeIcon icon={faArrowTrendDown} id='unlock' />: <FontAwesomeIcon icon={faArrowTrendUp} id='lock' />
            }
            {oneTransaction.id}
            </div>
            </th>
            <td>
                {oneTransaction.amount}
            </td>
            <td>
                <div className='transaction-info'>
                    <img src={sender.photoURL} alt="" />
                    <span>{sender.displayName}</span>
                </div>
            </td>
            <td>
                <div className='transaction-info'>
                    <img src={receiver.photoURL} alt="" />
                    <span>{receiver.displayName}</span>
                </div>
            </td>
            <td>{fromated}</td>
        </tr>
    )
}

export default OneTransactions