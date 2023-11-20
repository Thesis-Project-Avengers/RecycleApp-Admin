import { faBell, faEnvelope, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import React, {  useState } from 'react'
import '../styles/AllUsers.css'
import OneUser from './OneUser';
import '../styles/UserDetails.css'
import ProgressBar from '@ramonak/react-progress-bar';
import { BarChart } from '@mui/x-charts/BarChart';

const AllUsers = ({ view, changeView ,users,fetchUsers,accumulatorFilter,collectorFilter,handleBlock,handleDelete}) => {
    const [clickedUser,setClickedUser] = useState({})
    console.log('users in allusers',users);
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            // editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            // editable: true,
        },
        
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 150,
            // editable: true,
        },
        {
            field: 'isBlocked',
            headerName: 'isBlocked',
            width: 150,
            // editable: true,
        },
    ];
    
    const handleUserDetails = (user) => {
        console.log(user);
        setClickedUser(user)
        changeView('userDetails')
    }

    

    const renderView = () => {
        if (view === "allusers") {
            return (
                <div className='main-section' >
                    <div className='overview-top-nav' >
                        <h1>Users</h1>
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
                    <div className='all-filters' >
                        <div className='one-filter' onClick={(e)=>{
                            e.preventDefault();
                            fetchUsers();
                        }} ><span>All Users</span></div>
                        <div className='one-filter' onClick={(e)=>{
                            e.preventDefault();
                            collectorFilter()
                        }} ><span>Collector</span></div>
                        <div className='one-filter' onClick={(e)=>{
                            e.preventDefault();
                            accumulatorFilter()
                        }} ><span>Accumulator</span></div>
                    </div>
                    <div className='users-container' >
                        <Box sx={{ height: "100%", width: '100%', border: "1px solid black", borderRadius: "20px" }} >
                            <DataGrid
                                rows={users}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 7,
                                        },
                                    },
                                }}
                                pageSizeOptions={[7]}
                                
                                 onRowClick={(row)=>{handleUserDetails(row.row)}}
                            />
                        </Box>
                    </div>
                </div>
            )
        }
        else if (view === "userDetails") {
            return (
                <div className='main-section' >
                    <div className='main-section-body' >
                        <div className='main-section-body-left'>
                                <div className='bar-charts-user-details'>
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
                                <div className='progress-charts-user-details' >
                                    <h3>Recycling Progress</h3>
                                    <div className='one-progress'>
                                        <h6>Recycling Lectures</h6>
                                        <ProgressBar completed={70} bgColor='#73d905' className='progress-bars' />
                                    </div>
                                    <div className='one-progress'>
                                        <h6>Recycling Assignments</h6>
                                        <ProgressBar completed={90} bgColor='#73d905' className='progress-bars' />
                                    </div>
                                    
                                </div>
                        </div>
                        <div className='main-section-body-right' >
                            <OneUser user={clickedUser} fetchUsers={fetchUsers} handleBlock={handleBlock} handleDelete={handleDelete}  />
                        </div>
                    </div>
                </div>
            )
        }
    }


    return renderView()
}

export default AllUsers