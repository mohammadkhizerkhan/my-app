// import { useEffect, useState } from "react";
// import { projectStore } from "../firebase/config";

// const useFirestore =(collection)=>{
//     const [docs, setdocs] = useState([])

//     useEffect(() => {
//         const unsub=projectStore.collection(collection)
//         .orderBy("createsBy","desc")
//         .onSnapshot((snap)=>{
//             let documents=[]
//             snap.forEach(doc=>{
//                 documents.push({...doc.data(),id:doc.id})
//             })
//             setdocs(documents)
//         });
//         return ()=>unsub();
//     }, [collection])
//     return {docs}
// }
// export default useFirestore;

// import { useEffect, useState } from "react";
// import { projectStore } from "../firebase/config";

// const useFirestore =()=>{
//     const [document, setdocument] = useState([])

//     useEffect(() => {
//         projectStore.collection("images")
//         .orderBy("createsBy","desc")
//         .onSnapshot((snap)=>{
//             // console.log(snap.docs.map(doc=>(doc)))
//             console.log(snap.docs)
//             setdocument(snap.docs.map(doc=>({...doc.data(),id:doc.id})))
//         });
        
//     }, [])
//     console.log(document)
//     return {document}
// }

// export default useFirestore;