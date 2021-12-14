import { useState,useEffect } from "react";
import { projectStorage,projectStore,timestamp} from "../firebase/config";


function useStorage(file) {
    const [progress, setprogress] = useState(0)
    const [error, seterror] = useState(null)
    const [url, seturl] = useState(null)


    useEffect(() => {
       const storageRef=projectStorage.ref(file.name)
       const collectionRef=projectStore.collection("images");


       storageRef.put(file).on("state_changed",(snap)=>{
           let precentage=(snap.bytesTransferred/snap.totalBytes)*100;
           setprogress(precentage)
       },(err)=>{
           seterror(err)
       },async ()=>{
           const url=await storageRef.getDownloadURL();
           const createrAt=timestamp();
           collectionRef.add({url,createrAt})
           seturl(url)
       }
       )
    }, [file])


    return { progress, error, url }
         
}

export default useStorage;
