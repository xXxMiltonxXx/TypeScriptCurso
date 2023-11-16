///////////////VOID//////////////////
//funcion que puede devolver algun valor pero no es necesario, si llega al return implicito 
function logMessage(message: string): void {
    console.log(message)
    //return implicito 
}
//en funcion flecha 
const logMessage1= (message:string):void =>{
    console.log(message)
}
//////////////NEVER///////////////////
// no llega al return implicito por que existe un throw
//
function throwError (message: string): never{
    if( message) throw new Error(message);
    throw new Error(message);
    //cualquier procesos que interrumpa la ejecucion 
    process.exit(1)
}
