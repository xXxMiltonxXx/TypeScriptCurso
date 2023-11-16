
//inferencia de datos 
//////Inferencia en funciones anonimas segun el contexto

//funciona con funciones flecha o con funciones normales
//funciona con todos los metodos de para recoerrer
//el arreglo forEach, map

const vengadores =['Thon', 'Iron Man', 'Hulk']
//mediante el bucle se puede recorrer con el metodo forEach
vengadores.forEach(vengadores => {
    //recorre el arreglo y usa el metodo de strings
    //lo infiere 
    console.log(vengadores.toUpperCase())
})
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const vengadoresTI =['Thon', 'Iron Man', 'Hulk']
//mediante el bucle se puede recorrer con el metodo forEach
vengadoresTI.map(function(vengadoresTI) {
    //recorre el arreglo y usa el metodo de strings
    //lo infiere 
    console.log(vengadoresTI.toUpperCase())
})
