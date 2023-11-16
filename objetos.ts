//objetos 
//los objetos tiene la inferencia de datos 
// al momento de declarar los objetos 
//se asigna el tipado 
let hero = {
    name:'thor',
    age: 1500,
};
// si se intenta crear o leer una nueva propiedad 
// hero.power = 100 

//funcion para crear heroes 
//no se sabe si es del mismo tipo 

function createHero (name: string, age: number){

    return {
        name, age
    }
}

//se llama a la funcion createHero
const thor = createHero('Thor',1500)

//