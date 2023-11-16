// Union types

//es una union de tipos puede ser uno u otro segun se lo asigne 

type DoctorId = `${string}-${string}-${string}-${string}-${string}`

//tipo de union 
//puede ser una cadena de texto o otro 
//tambien con diferentes tipos de datos string|number
type Speciality = 'Caldiologo'| 'endocrinologo' | 'alergiologo' | 'epidemiologo' |'neumologo'


//este es el modelo de los doctores
//contiene los campos donde se unen los tipos 
//se declaran los valores y tipo que tendran
//estos campos seran requeridos o no requeridos 
type Doctor ={
    readonly id ?: DoctorId
    name: string
    lastname: string 
    age: number
    isActive?: boolean
    speciality?: Speciality
}

// se crea el objeto con sus parametros 
let doctor:Doctor={
    name: 'Raul',
    lastname:'Alvarez',
    age:67,
}

//Se hace una funcion donde se crea un doctor
//
const createDoctor = (doctor:Doctor):Doctor =>{
    const {name, lastname, age}=doctor
    return {id:crypto.randomUUID(), name, lastname, age, isActive:true,speciality:'endocrinologo' }
}

//ejemplo 2 con animaciones 
const enableAnimationDuration: boolean | number = 200 //200ms

