//optional properties

//sirve para crear una propiedad del objeto que es opcional 

type Student ={
    id?:number
    name : string
    age : number
    isActive?: boolean //esta es la propiedad opcional 
};

let student: Student ={
    name : 'Raul',
    age: 16
};

const createStudent=(student:Student):Student =>{
    const {name, age}=student
    return{name, age, isActive:true} //por defecto esta activo ya que se esta creando 
}

// // function createStudent(student:Student):Student{
// //     const{name,age}= student
// //     return{name,age,isActive:true}
// // }

const newStudent = createStudent({name:'Raul',age:15})

console.log(newStudent.isActive)

newStudent.id?.toString() //evita ejecutarlo con ? (encadenamiento opcional)