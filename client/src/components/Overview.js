import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEllipsisVertical, faEnvelope, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'
import { BarChart } from '@mui/x-charts/BarChart';
import ProgressBar from "@ramonak/react-progress-bar";
import '../styles/Overview.css'
import { FIREBASE_DB } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Overview = () => {
    const [allRequests,setAllRequests] = useState(0)
    const [doneRequests,setDoneRequests] = useState(0)
    const [aluminum,setAluminium] = useState(0)
    const [recycledAluminum,setRecycledAluminium] = useState(0)
    const [aluminumBars,setAluminumBars] = useState(0)
    const [plastic,setPlastic] = useState(0)
    const [recycledPlastic,setRecycledPlastic] = useState(0)
    const [plasticBars,setPlasticBars] = useState(0)
    
      const fetch = ()=>{
        let req = 0
        let done = 0
        const fetchAluminum = async () => {
            try {
              const ref = collection(FIREBASE_DB, "markers");
              const q = query(ref,where('category','==','Aluminum Cans'));
              let qt = 0;
              let rqt = 0
              let aluBar = 0
              await getDocs(q).then((snapshot) => {
                aluBar = snapshot.docs.length
                snapshot.docs.forEach((doc, index) => {
                      qt+=doc.data().quantity
                      if(doc.data().completed) {
                        rqt+=doc.data().quantity
                        req=req+1
                      }
                });
                done = done + aluBar
                setAluminumBars(aluBar)
                setAluminium(qt);
                setRecycledAluminium(rqt)
              });
            } catch (error) {
        
              console.log(error);
            }
          };
        const fetchPlastic = async () => {
            try {
              const ref = collection(FIREBASE_DB, "markers");
              const q = query(ref,where('category','==','Plastic Bottles'));
              let qt = 0;
              let rqt = 0
              let plBar = 0
              await getDocs(q).then((snapshot) => {
                plBar = snapshot.docs.length;
                snapshot.docs.forEach((doc, index) => {
                      qt+=doc.data().quantity
                      if(doc.data().completed) {
                        rqt+=doc.data().quantity
                        req=req+1
                      }
                });
                done = done + plBar
                console.log(done,req);
                setPlasticBars(plBar)
                setPlastic(qt);
                setRecycledPlastic(rqt)
              });
            } catch (error) {
        
              console.log(error);
            }
          };
          fetchPlastic()
        fetchAluminum().then(()=>{ 
          setAllRequests(done)
        setDoneRequests(req)
        })
          
          
        
      }

      useEffect(()=>{   
        fetch()
      },[])


    return (
        <div className='main-section' >
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
            <div className='table-section' >
                <table className="table caption-top">
                    <thead >
                        <tr >
                            <th scope="col" colSpan={2} >Category</th>
                            <th scope="col">Total Items</th>
                            <th scope="col">Recycled</th>
                            <th scope="col">Last Updates</th>
                            <th scope="col">Average</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} >Aluminium Cans</td>
                            <td>{aluminum}</td>
                            <td>{recycledAluminum}</td>
                            <td>2021-05-03</td>
                            <td>
                                <div className='average'>
                                    {isNaN(recycledAluminum/aluminum*100)? <span>0%</span> : <span>{Math.round(recycledAluminum/aluminum*100)}%</span>}
                                </div>
                            </td>
                            <td className='details' ><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2} >Plastic Bottles</td>
                            <td>{plastic}</td>
                            <td>{recycledPlastic}</td>
                            <td>2021-05-03</td>
                            <td>
                                <div className='average'>
                                {isNaN(recycledPlastic/plastic*100)? <span>0%</span> : <span>{Math.round(recycledPlastic/plastic*100)}%</span>}
                                </div>
                            </td>
                            <td className='details' ><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2} >Plastic Bottles</td>
                            <td>120</td>
                            <td>80</td>
                            <td>2021-05-03</td>
                            <td>
                                <div className='average'>
                                    <span>75%</span>
                                </div>
                            </td>
                            <td className='details' ><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2} >Plastic Bottles</td>
                            <td>120</td>
                            <td>80</td>
                            <td>2021-05-03</td>
                            <td>
                                <div className='average'>
                                    <span>75%</span>
                                </div>
                            </td>
                            <td className='details' ><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2} >Plastic Bottles</td>
                            <td>120</td>
                            <td>80</td>
                            <td>2021-05-03</td>
                            <td>
                                <div className='average'>
                                    <span>75%</span>
                                </div>
                            </td>
                            <td className='details' ><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className='charts-container' >
                <div className='bar-charts'>
                    <h3>Recycling Perspective</h3>
                    <BarChart className='bar'
                        xAxis={[
                            {
                                id: 'barCategories',
                                data: ['Aluminum', 'Plastic', 'CardBox', 'Glass', 'Copper'],
                                scaleType: 'band',
                            },
                        ]}  
                        series={[
                            {
                                data: [aluminumBars, plasticBars, doneRequests, allRequests, 6],
                            },
                        ]}
                        width={500}
                        height={300}
                        colors={['#73d905']}
                    /> 
                </div>
                <div className='progress-charts' >
                    <h3>Recycling Progress</h3>
                    <div className='one-progress'>
                        <h6>Recycling Requests     {doneRequests}/{allRequests}  </h6>
                        <ProgressBar completed={Math.round(doneRequests/allRequests*100)} bgColor='#73d905' className='progress-bars'/>
                    </div>
                    <div className='one-progress'>
                        <h6>Plastic Requests</h6>
                        <ProgressBar completed={90} bgColor='#73d905' className='progress-bars'/>
                    </div>
                    <div className='one-progress'>
                        <h6>Recycling Exams</h6>
                        <ProgressBar completed={43} bgColor='#73d905' className='progress-bars'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview