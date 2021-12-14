import useFirestore from "../hooks/useFirestore";
import React from "react";
// import { anime } from "framer-motion"

const ImageGrid=({setselectedImg})=>{
    
    
    const {docs}=useFirestore("images");
    // console.log(docs)
    
            
    return(
        <div className="img-grid">
            {
                docs.map(doc=>
                    (
                        <div key={doc.id} className="img-wrap" onClick={()=>setselectedImg(doc.url)}>
                            <img src={doc.url} alt="" />
                        </div>
                    )
                )
            }
        </div>
    )
}

export default ImageGrid;