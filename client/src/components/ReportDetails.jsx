import React from 'react'
import { useEffect } from 'react';
import { FIREBASE_DB } from '../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

const ReportDetails = ({ setView, selected }) => {
    console.log("selec",selected);
    const [reporter, setReporter] = useState({})
    const [reported, setReported] = useState({})
    const [causes, setCauses] = useState([])
    const getUserInfo = async () => {
        try {
            setReporter({})
            const refReporter = doc(FIREBASE_DB, "users", selected?.reporter)
            await getDoc(refReporter).then((snapshot) => {
                setReporter(snapshot.data());
            })
            setReported({})
            const refReported = doc(FIREBASE_DB, "users", selected?.reported)
            await getDoc(refReported).then((snapshot) => {
                setReported(snapshot.data());
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserInfo()
        const handleCauses = () => {
            let causes = []
            for (let thecause in selected.causes) {
                if (selected.causes[thecause] === true) {
                    causes.push(thecause)
                }
            }
            console.log("here", causes);
            setCauses(causes)
        }
        getUserInfo()
        console.log(selected.causes);
        handleCauses()
    }, [])

    const handleBlock = async () => {
        await updateDoc(doc(FIREBASE_DB, "users", reported?.uid), {
            isBlocked: !reported?.isBlocked
        })
        getUserInfo()
        console.log(reported?.isBlocked);
    }


    return (
        <div className='reportCantainer'>
            <h1 className='goback' onClick={() => { setView("reportes") }}> {"<  "}Go Back</h1>
            <div className='reportDtails'>

                <div className='theReport'>
                    <div className='causes'>
                        <h2>Causes</h2>

                        <ul>
                            {causes.map((oneCause) => {
                                return <>
                                    <li>{oneCause}</li>

                                </>
                            })
                            }
                        </ul>
                        <h2>Content</h2>
                        <div className="reportpara">
                            <p>{selected.content}</p>
                        </div>

                    </div>
                    <div className='cardes'>
                        <div className='userCard'>
                            <h2 id='titleRep'>Reporter</h2>
                            <img src={reporter.photoURL} alt="" className='userPhoto' />
                            <p>name : {reporter.firstName + "  " + reporter.lastName} </p>
                            <p>type : {reporter.type}</p>
                            <p>rating : {reporter.rating}</p>
                            <p>points : {reporter.points}</p>
                            <p>contact : {reporter.email}</p>
                        </div>
                        <div className='userCard'>
                            <h2 id='titleRep'>Reported</h2>
                            <img src={reported.photoURL} alt="" className='userPhoto' />
                            <p>name : {reported.firstName + "  " + reported.lastName} </p>
                            <p>type : {reported.type}</p>
                            <p>rating : {reported.rating}</p>
                            <p>points : {reported.points}</p>
                            <p>contact : {reported.email}</p>
                            {reported?.isBlocked ? <FontAwesomeIcon icon={faLock} className='lock' style={{ color: "red" }} onClick={() => { handleBlock(); }} /> :
                                <FontAwesomeIcon icon={faLockOpen} className='lock' onClick={() => { handleBlock() }} />
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportDetails