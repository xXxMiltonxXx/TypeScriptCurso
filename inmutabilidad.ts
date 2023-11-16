//Inmutabilidad 
//object freeze 

//typeAlias
type Cliente={
    id?:number
    name:string
    age: number
    isActive?:boolean
}

//objeto 
let cliente: Cliente={
    name:'Samuel',
    age: 22
}

//funcion para crear 

const createCustomer=(cliente:Cliente):Cliente=>{
    const {name, age}= cliente
    return {name, age, isActive:true}
}
//Object.freeze
const newCustomer = Object.freeze(createCustomer({name:'Pedro', age:34})) //hace que el codigo no sea editable 
//eso funciona en tiempo de ejecucion 

//newCustomer.id=121212 ///no permite editar
