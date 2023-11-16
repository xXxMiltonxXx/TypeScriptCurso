 //tipado de funciones flecha 
 //arrow functions 

 //tipado en la misma funcion
 //en la misma funcion se tipa el tipo de variable 
 //y el tipo de resultado en tipo number 
 const sumar =(a:number, b:number ):number=>{
   //el resultado retorna un tipo de number 
    return a+b
 }

//tipo que tendra la funcion 
//funcion 
//se divide en dos la funcion 
//la primera parte es las variables con el tipado fuerte y el tipo de valor que retona 
//la funcion perse 
 const restar: (a:number, b:number)=> number =(a,b)=>{
   //retorna un number de la respuesta de a-b 
   //es de tipo number 
    return a - b
 }