
//PRIMER EJEMPLO DE POLYFILL
/* const array = [20,30,40,50];

for (let i = 0; i < array.length; i++) {
    if (condicion(array[i])){
        console.log(array[i]);
    }
    
}

const condicion = (edad) => {
    return edad > 20;
} */

//POLIFILL CREANDO PROPIEDAD DE ARRAYS
/* const numeros = [ 1, 4, 7, 23, 8]

Array.prototype.buscar = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            return this[i]
        }
    }
}

const busqueda = numeros.buscar((numero) => numero < 20)

console.log(busqueda) */

//pollifil de metodo map

const numeros = [ 3, 4, 7, 23, 8]

const nuevoArray = numeros.map((numero) => numero * 2 )

console.log(nuevoArray) 

for(let i = 0; i < nuevoArray.length; i++){
    nuevoArray[i] += 2 
}

console.log(nuevoArray)

