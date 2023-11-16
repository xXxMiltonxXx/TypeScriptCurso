// Funciones 
// // en este primer caso el parametro se autoasigna como any
// // function saludar (name){
// //     console.log(`hola ${name} `)
// // }
// // asepta cualquier tipo de dato, es decir igna cualquier tipod e dato
// // no funciona el autoCompletado
// // saludar('raul')
// // saludar(23)

// //aqui ya se le asigna de tipado al parametro 
// function saludar(name:string){
//     console.log(`Hola ${name}`)
// }
// //en los argumento ya tiene la restriccion de que es tipo string 
// saludar('Raul')
// //no acepta otro tipo de dato, genera un error 
// saludar(2)

///////PEEEEEEEEEEEEROOOOOO que pasa con los objetos ?

// //toma los atributos dentro del objeto y les asigna un tipo any 
// function saludar ({name,age}){
//     console.log(`Hola ${name} tienes ${age}`)
// }

// //por lo tanto en el argumento se puede asignar cualquier tipo de dato
// saludar({name:32, age:'Raul'})

// ////Que pasa si  se trata de tipor un objeto como los un paratro normal 

// //coliciona con la forma de cambiar el nombre de los atributos de un objeto den JAvaScript 
// //lo que hace es cambiar el nombre del atributo 
// //no lo dota de tipado 
// function saludar({name:string, age:number}){
//     console.log(`Hola ${name} tienes ${age}`)
// }

// saludar({name:'Raul', age:34})
////////////////////////////////////////////////////////////////////////////////////////////////////
   ///////////FORMAS CORRECTAS ///////////FORMAS CORRECTAS ///////////FORMAS CORRECTAS ///////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// //en esta forma queda tipado los atributos del objeto 
// function saludar ({name, age}:{name:string, age:number}){
//     console.log(`hola ${name} tienes ${age}`)
// }

// saludar({name:'Raul',age:34})

//Segunda forma 
function saludar (persona:{name:string, age:number}){
    //se debe hacer la destructuracion para sacar los atributos del objeto 
    const {name, age}= persona
    console.log(`hola ${name} tienes ${age}`)
}

saludar({name:'Raul',age:34})



