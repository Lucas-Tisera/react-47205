const personas = [
    { nombre: 'Juan', apellido: 'Perez', edad: 37 },       
    { nombre: 'Tomas', apellido: 'Terraza', edad: 22 },    
    { nombre: 'Agustina', apellido: 'Vallejos', edad: 45 },
    { nombre: 'Luis', apellido: 'Luis', edad: 37 },
    { nombre: 'Agustina', apellido: 'Terraza', edad: 22 },
    { nombre: 'Martina', apellido: 'Vallejos', edad: 45 }
]

const mayores = personas.filter( x => x.edad > 27)

//console.log(mayores)

const terraza = personas.find( persona => persona.apellido == "Terraza" )

//console.log(terraza)