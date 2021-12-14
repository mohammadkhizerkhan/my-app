import React, { useEffect, useState } from "react";
import { projectStore } from "../firebase/config";

// import useFirestore from "../hooks/useFirestore";

const ImageGrid=()=>{

    const [docs, setdocs] = useState([]);

    useEffect(() => {
                projectStore.collection("images")
                .orderBy("createsBy","desc")
                .onSnapshot((snap)=>{
                    const data=snap.docs.map((doc)=>({
                        id:doc.id,
                        ...doc.data()
                    }));
                    setdocs(data)
                    console.log(data)
                });
            }, [])

    return(
        <div>
            <p>{docs}</p>
        </div>
    )
}

export default ImageGrid;