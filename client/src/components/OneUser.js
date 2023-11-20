import React, { useEffect, useState } from 'react'
import '../styles/OneUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBan, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { FIREBASE_DB } from '../firebaseConfig';
// import { updateDoc,doc } from 'firebase/firestore';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap : '1rem'
};

const OneUser = ({user,handleBlock,handleDelete}) => { 
  console.log(user);
  // const [currentUser,setCurrnetUser]= useState({})
  const [openDelete,setOpenDelete] = useState(false)
  const [openBlock,setOpenBlock] = useState(false)
  const [updated,setUpdated]=useState(true)
  const handleOpenDelete = ()=>{
    setOpenDelete(true);
  }
  const handleCloseDelete = ()=>{
    setOpenDelete(false);
  }
  const handleOpenBlock = ()=>{
    setOpenBlock(true);
  }
  const handleCloseBlock = ()=>{
    setOpenBlock(false);
  }

  const updateUser = (e)=>{ 
    e.preventDefault();
            handleBlock(user)
            // setUpdated(!updated)
            console.log(user);
            // setCurrnetUser()
            handleCloseBlock()
  }


 
 useEffect(()=>{
  // handleUserDetails(currentId)
 },[updated])
  return (
    <div className='user-card'>
      <div className='profession'>
        <span>{user.type}</span>
      </div>
      <div className='user-details'>
        <div className='image-frame-one-user'>
          <img src={user.photoURL}  alt='' />
        </div>
          <span>{user.firstName+' '+user.lastName}</span>
          <span className="user-email">{user.email}</span>
      </div>
          <div className='one-user-buttons'>
            <div className='user-button-delete' onClick={(e)=>{
              e.preventDefault();
              handleOpenDelete()
            }} >
                <FontAwesomeIcon icon={faTrash}/>
                <span>Delete</span>
            </div>
            
            {user.isBlocked ? <div className='user-button-block' onClick={(e)=>{
              e.preventDefault();
              handleOpenBlock()
            }} >
                <FontAwesomeIcon icon={faBan}/>
              <span>Unblock</span>
            </div> : 
            <div className='user-button-block' onClick={(e)=>{
              e.preventDefault();
              handleOpenBlock()
            }} >
                <FontAwesomeIcon icon={faBan}/>
              <span>Block</span>
            </div>}
            
          <div>
      
    </div>
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h5>Are you sure you want to Delete this user ? </h5>
          <div className='confirm' onClick={(e)=>{
            e.preventDefault();
            handleDelete(user)
            handleCloseDelete()
          }} >
              <span>Confirm</span>
          </div>
          <div className='cancel' onClick={(e)=>{
            e.preventDefault();
            handleCloseDelete();
          }} >
              <span>Cancel</span>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openBlock}
        onClose={handleCloseBlock}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h5>Are you sure you want to Block this user ? </h5>
          <div className='confirm' onClick={(e)=>{
            updateUser(e)
            setUpdated(!updated)
          }} >
              <span>Confirm</span>
          </div>
          <div className='cancel' onClick={(e)=>{
            e.preventDefault();
            handleCloseBlock();
          }} >
              <span>Cancel</span>
          </div>
        </Box>
      </Modal>

          </div>
    </div>
  )
}

export default OneUser