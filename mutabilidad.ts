//Mutabilidad 

type Teacher={
    readonly id?:number  // esta propiedad no se puede modificar 
    name:string
    age: number
    isActive?: boolean
}

let teacher: Teacher ={
    name:'Luis',
    age:12
}

const createTeache= (teacher:Teacher):Teacher =>{
    const {name, age} = teacher
    return {name,age, isActive:true}
}

const newTeacher = createTeache({name:'Pedro', age:34})

//solo es de escritura
//no lo hace inmutable
// newTeacher.id =121221 ///no se pude escribir, no se puede acceder a reeescribir 

