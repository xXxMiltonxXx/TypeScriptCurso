// template Union Type 
//un tipo se puede usar en otros tipos 
type BookId=`${string}-${string}-${string}-${string}-${string}`

type Book ={
    readonly id?: BookId //mutabilidad 
    title: string
    year:number
    category?: string 
}

let book: Book={
    title:'Pensar Bien sentirse Bien',
    year:2010
}

const createBook=(book:Book):Book=>{
    const {title,year}= book
    return{
        //debido al tipo asignado al id
        id:crypto.randomUUID(), //pide que sea un tipo de cadenadeTexo-cadenadeTexo-cadenadeTexto-cadenadeTexto-cadenadeTexto
        title,
        year, 
        category:'Desarrollo personal'
    }
}

const newBook = createBook({title:'48 leyes del poder', year:2001})

//otro ejemplo 
//validar que se esta guardando de una o de otra forma 
type HexadecimalColor =`#${string}`
const color1: HexadecimalColor ='#000000'
