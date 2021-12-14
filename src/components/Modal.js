import React from 'react'

function Modal({selectedImg,setselectedImg}) {
    const clickHandler=(e)=>{
        if(e.target.classList.contains("backdrop")){
            setselectedImg(null)
        }
    }
    return (
        <div className='backdrop' onClick={clickHandler}>
            <img src={selectedImg} alt="full pic" />
        </div>
    )
}

export default Modal
