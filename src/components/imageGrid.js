import useFirestore from "../hooks/useFirestore";
import React from "react";
// import { projectStore } from "../firebase/config";


const ImageGrid=()=>{
    
    
    const {docs}=useFirestore("images");
    // console.log(docs)
    
            
    return(
        <div>
            {
                docs.map(doc=>{
                    return(
                        <>
                        <li key={doc.id}>
                            <img src={doc.url} alt="" />
                        </li>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ImageGrid;