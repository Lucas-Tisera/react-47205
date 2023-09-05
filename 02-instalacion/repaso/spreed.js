function sumar (a, b, c, d, e){
    return a + b + c + d + e
}


const numeros = [1, 2, 3, 4, 5]

//console.log(sumar(...numeros))

const personas = [
    {nombre: "Juan", apellido:"Perez",edad: "37" },
    {nombre: "Tomas", apellido:"Terraza",edad: "22" },
    {nombre: "Agustina", apellido:"Vallejos",edad: "45" }
]

const personas2 = [
    {nombre: "Luis", apellido:"Luis",edad: "37" },
    {nombre: "Agustina", apellido:"Terraza",edad: "22" },
    {nombre: "Martina", apellido:"Vallejos",edad: "45" }
]

const unionDePersonas = [...personas, ...personas2]

//console.log(unionDePersonas)