//TypeAlias
//los typeAlias se hacen en pascalCase
//define como es un objeto 

type Hero = {
    name: string,
    age: number
}

//se crea un objeto 
//se le agrega que es del tipo Hero
let hero1 : Hero = {
    name:'thor',
    age:1500
};
//funcion crea un objeto del tipo Hero 
const creatHero=(hero1:Hero)=>{
    const {name, age}= hero1
    return {name, age}
}

// function createHero (hero1:Hero){
//     const {name,age}=hero1
//     return{name,age}
// }

const thor1 = creatHero({name:'Thor',age:122})