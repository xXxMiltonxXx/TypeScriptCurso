//Intersection types 
//sirve para extender los tipos 
//separar los imputs de las propiedades 
//y tener el tipo que lo tenga todo 
type CarId =`${string}-${string}-${string}-${string}-${string}`
//union type
type CarColor = 'Blanco' | 'Negro' | 'Rojo'

type CarBasicInfo ={
    brand: string 
    model: string
    doors: number
}
//propiedades
type CarProperties ={
    id?:CarId
    color?:CarColor
}
//es una interseccion de tipos 
//intersection type
type Car = CarBasicInfo & CarProperties

let car: CarBasicInfo ={
    brand:'BMW',
    model:'M3',
    doors: 3
}

const createCar = (input: CarBasicInfo):Car=>{
    const {brand,model, doors}=input
    return{
        id:crypto.randomUUID(),
        brand,
        model,
        doors,
        color:'Blanco'

    }
}