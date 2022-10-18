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

export function getProductos(){
    return new Promise(
   (resolve) => {
    setTimeout( ()=> resolve(data), 2000 );
   });
}
   
export function getOne(id){
    return new Promise(
   (resolve) => {
    setTimeout( ()=> resolve(data.find((item)=> item.id === Number(id))), 2000 );
   });

}
   
export function getCategory(categoryid){
    return new Promise(
   (resolve) => {
    setTimeout( ()=> resolve(data.filter((item)=> item.category === categoryid)), 2000 );
   });

}
   