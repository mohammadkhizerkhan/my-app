import { useEffect, useState } from "react";
import { projectStore } from "../firebase/config";

const useFirestore =(collection)=>{
    const [docs, setdocs] = useState([{id:"",url:""}]);

    useEffect(() => {
        projectStore.collection(collection).onSnapshot((snapshot)=>{
            setdocs(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
            // console.log(snapshot.docs.map((doc)=>doc.id))
            // console.log(snapshot.docs.map((doc)=>doc.data()))
                })
            }, [collection])
    return {docs}
}
export default useFirestore;


