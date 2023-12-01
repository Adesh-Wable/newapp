import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../Component/Style/NewApp.css'

const Submitted = () => {
  return (
    <>
    <div className='modal-wrapper'> </div>
     <div className='modal-container'>
       <div className='check-icon'> <CheckCircleIcon /></div>
        <label>Submitted</label>
        </div>
        </>
  )
}

export default Submitted;