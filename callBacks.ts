//funcion callback 
//es una funcion que recibe como parametro otra funcion 

// //la funcion que esta como parametro no esta tipada 
// const sayHiFromFunction= (fn) =>{

//     fn('Raul')

// }

// //el tipo de dato puede ser cualquiera, es any por defecto 
// sayHiFromFunction((name)=>{
//     console.log(`Hola ${name}`)
// })


// ////Forma incorrecta de tipar 

// //cuando se tipa una funcion con el tipo Function 
// //es un any de funciones 
// //espera cualquier tipo de funcion 
// const sayHiFromFunction =(fn:Function) =>{
//     fn('Raul')
// }

// sayHiFromFunction((name:string)=>{
//     console.log(`Hola ${name}`)
// })


/////////////Forma Correcta /////////////Forma Correcta /////////////Forma Correcta
//la funcion se tipo con el parametro que va a tener y luego el resultado que va a ser si retorna o no y que tipo va a retornar 
const sayHiFromFunction=(fn:(name:string)=>void)=>{
    fn('Luis')
}
//se asigna una variable, se tipa con el tipo de dato esperado 
const sayHi= (name:string)=>{
    console.log(`Hola ${name}`)
}

//se ejecuta el callback
sayHiFromFunction(sayHi)

