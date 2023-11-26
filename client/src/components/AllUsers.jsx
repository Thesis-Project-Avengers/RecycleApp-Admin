import { faBell, faEnvelope, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react'
import '../styles/AllUsers.css'
import OneUser from './OneUser';
import '../styles/UserDetails.css'
import ProgressBar from '@ramonak/react-progress-bar';
import { BarChart } from '@mui/x-charts/BarChart';

const AllUsers = ({ view, changeView, users, fetchUsers, accumulatorFilter, collectorFilter }) => {
    const [clickedUser, setClickedUser] = useState({})
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
    ];

    const handleUserDetails = (user) => {
        users.forEach(row => {
            console.log(row.id);
            if (row.id === user) {
                setClickedUser(row)
            }
        })
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
                        <div className='one-filter' onClick={(e) => {
                            e.preventDefault();
                            fetchUsers();
                        }} ><span>All Users</span></div>
                        <div className='one-filter' onClick={(e) => {
                            e.preventDefault();
                            collectorFilter()
                        }} ><span>Collector</span></div>
                        <div className='one-filter' onClick={(e) => {
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
                                onRowSelectionModelChange={(row) => { handleUserDetails(row[0]) }}
                            />
                        </Box>
                    </div>
                </div>
            )
        }
        else if (view === "userDetails") {
            return (
                <div>
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
                    <OneUser user={clickedUser} changeView={changeView} fetchUsers={fetchUsers}/>
                </div>
            )
        }
    }


    return renderView()
}

export default AllUsers