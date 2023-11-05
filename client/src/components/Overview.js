import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEllipsisVertical, faEnvelope, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'
import { BarChart } from '@mui/x-charts/BarChart';
import ProgressBar from "@ramonak/react-progress-bar";
import '../styles/Overview.css'

const Overview = () => {
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
                            <th scope="col">Percentage</th>
                            <th scope="col">Last Updates</th>
                            <th scope="col">Average</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} >Plastic Bottles</td>
                            <td>120</td>
                            <td>80</td>
                            <td>66.7%</td>
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
                            <td>66.7%</td>
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
                            <td>66.7%</td>
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
                            <td>66.7%</td>
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
                            <td>66.7%</td>
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
                                data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                                scaleType: 'band',
                            },
                        ]}
                        series={[
                            {
                                data: [2, 5, 3, 4, 6, 9, 7, 2],
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
                        <h6>Recycling Lectures</h6>
                        <ProgressBar completed={70} bgColor='#73d905' className='progress-bars'/>
                    </div>
                    <div className='one-progress'>
                        <h6>Recycling Assignments</h6>
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