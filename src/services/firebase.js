// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbXRFNuKLHPny_xiu_bAn0WMs95e5lCO8",
  authDomain: "alzstore-d6d6b.firebaseapp.com",
  projectId: "alzstore-d6d6b",
  storageBucket: "alzstore-d6d6b.appspot.com",
  messagingSenderId: "180047526080",
  appId: "1:180047526080:web:ea295f182d2fd9c5379525",
  measurementId: "G-MNNEKLHRBZ"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);


export async function getProductos() {
    const collectionRef = collection(db, "productos");
    let results = await getDocs(collectionRef);
    let dataProductos = results.docs.map( doc => { 
        return { id: doc.id, ...doc.data()};
       })
    return dataProductos;  
}


export function getOne(id) {}
export function getCategory(categoryid) {}
export default FirebaseApp;
