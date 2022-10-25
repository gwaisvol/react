// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

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


export async function getOne(id) {
  try {
  const docRef = doc (db, "productos", id);
  const docResult = await getDoc(docRef);
  if (docResult.exists()){
  return { id: docResult.id, ...docResult.data()};
  }
  else{
    throw new Error("El producto no se encontró en la base de datos");
  }
}
catch(errorMsg) {
  console.error(errorMsg)
}
}


export async function getCategory(categoryid) {
  const collectionRef = collection(db, "productos");
  const queryCat = query(collectionRef, where("category","==", categoryid) )
  
  let results = await getDocs(queryCat);
  let dataProductos = results.docs.map((doc) => {
   return {
   id: doc.id,
   ...doc.data(),
   };
  });
  return dataProductos;
}

export async function createBuyOrder(orderData){
  const collectionRef = collection(db, "orders");
  let respuesta = await addDoc(collectionRef, orderData);
  return respuesta.id;
}

async function sendDataToFirebase(){
  const data = [
    {
    id: 1,
    title: "Rompecabezas",
    img: "../img/rompecabezas.jpg",
    price: 10500,
    expired: true,
    detail: "Alarma para personas mayores",
    stock: 10,
    category: "Rompecabezas"
    },
    
    {
    id: 2,
    title: "Control remoto",
    img: "../img/ControlRemoto.jpg",
    price: 8000,
    expired: true,
    detail: "Control remoto con letras grandes",
    stock: 10,
    category: "Controlesremotos"
    },
    
    {
    id: 3,
    title: "GPS Tracker",
    img: "../img/gpstracker.jpg",
    price: 20000,
    expired: true,
    detail: "GPS para seguimiento de personas con problemas de orientación",
    stock: 10,
    category: "GPS"
    },
     
    {
    id: 4,
    title: "Radio",
    img: "../img/Radio.jpg",
    price: 15000,
    expired: true,
    detail: "Radio con formato antiguo",
    stock: 5,
    category: "Radios"
    },
    
    {
    id: 5,
    title: "Peluche",
    img: "../img/peluche.jpg",
    price: 15000,
    expired: true,
    detail: "Peluche para adultos",
    stock: 5,
    category: "Peluches"
    },
    
    {
    id: 6,
    title: "Tablero Didactico",
    img: "../img/TableroDidactico.jpg",
    price: 15000,
    expired: true,
    detail: "Tablero didáctico, mantiene activa la actividad cerebral",
    stock: 6,
    category: "Tableros"
    },
    
    {
    id: 7,
    title: "Libros",
    img: "../img/Libro1.jpg",
    price:7000,
    expired: true,
    detail: "Libro para adultos, para colorear",
    stock: 7,
    category: "Libros"
    },
    
    ];
    let itemsCollectionRef = collection(db, "productos")

    for(let producto of data){
     delete(producto.id)
     let newDoc = addDoc(itemsCollectionRef, producto);
    }
}

export default FirebaseApp; 
