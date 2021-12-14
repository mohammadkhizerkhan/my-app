import React, { useState } from 'react'
import ProgressBar from './ProgressBar'


export default function Forms() {
    const [file,setFile]=useState(null)
    const [error,setError]=useState(null)

    const fileTypes=["image/png","image/jpeg"]

    const changeHandler=(e)=>{
        let selected=e.target.files[0]
        if(selected && fileTypes.includes(selected.type)){
            setFile(selected)
            setError("")
        }
        else{
            setFile(null)
            setError("please select the image file(png,jpeg)")
        }
    }
    return (
        <div>
            <form action="">
                <input type="file" onChange={changeHandler}/>
                <div className="output">
                    {error && <div className="error">{error}</div> }
                    {file && <div className="filename">{file.name}</div> }
                    {file && <ProgressBar file={file} setFile={setFile}/>}
                </div>
            </form>
        </div>
    )
}
