import firebase from "firebase/compat/app"
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCevwhkeHSTXGbDSwdXoEcQMJiIIkeCcEk",
  authDomain: "photo-gallery-5073e.firebaseapp.com",
  projectId: "photo-gallery-5073e",
  storageBucket: "photo-gallery-5073e.appspot.com",
  messagingSenderId: "90601288542",
  appId: "1:90601288542:web:ebe13d9e0e128f552255cf"
};


firebase.initializeApp(firebaseConfig);

const projectStorage=firebase.storage();
const projectStore=firebase.firestore();
const timestamp=firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage,projectStore,timestamp}