import { faBell, faEnvelope, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import '../styles/AllUsers.css'

const AllUsers = () => {
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
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
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
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    

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
                <div className='one-filter' ><span>All Users</span></div>
                <div className='one-filter' ><span>By Age</span></div>
                <div className='one-filter' ><span>By User Type</span></div>
                <div className='one-filter' ><span>Region</span></div>
                <div className='one-filter' ><span>Category</span></div>
            </div>
            <div className='users-container' >
                <Box sx={{ height: "100%", width: '100%', border: "1px solid black", borderRadius: "20px" }} >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 7,
                                },
                            },
                        }}
                        pageSizeOptions={[7]}
                        // onRowSelectionModelChange={(row)=>{handleUserDetails(row[0])}}
                    />
                </Box>
            </div>
        </div>
    )
}

export default AllUsers