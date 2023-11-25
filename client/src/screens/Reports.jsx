import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { faBell, faEnvelope, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Reports.css'
import { collection, onSnapshot } from 'firebase/firestore'
import { FIREBASE_DB } from '../firebaseConfig'
import AllReportes from '../components/AllReportes.jsx'
import ReportDetails from '../components/ReportDetails.jsx'

const Reports = () => {
    const [reportss, setReports] = useState([])
    const [view, setView] = useState("reportes")
    const [selected, setSelected] = useState("reportes")
    useEffect(() => {
        const fetchReports = async () => {
            const reportsRef = collection(FIREBASE_DB, "reports");
            let data = [];
            onSnapshot(reportsRef, (snapshot) => {
                snapshot.docs.forEach((doc) => {
                    data.push({ ...doc.data(), id: doc.id });
                });
                setReports(data)
            });

        };
        fetchReports()

    }, [])



    return (
        <div>
            <SideBar />
            <div className='overview-top-nav' >
                <h1>Reports</h1>
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

            {
                view === "reportes" ? <AllReportes reportss={reportss} setView={setView} setSelected={setSelected} /> : <ReportDetails selected={selected} setView={setView} />
            }

        </div>
    )
}

export default Reports