const productos = [
    { id: 1, name: 'Escuadra', descripcion: "30cm", stock: 10 },
    { id: 2, name: 'Cartuchera', descripcion: "Roja", stock: 20 },
    { id: 3, name: 'Lapices', descripcion: "Kit Dibujo 20 Lapices", stock: 4 },
    { id: 4, name: 'Goma', descripcion: "Para borrar", stock: 1 },
]

const getProductos = new Promise((resolve) => {
    console.log("ACA COMIENZA LA PROMESA")
    setTimeout(()=>{
        resolve(productos)
    }, 3000)
})

getProductos.then((data) => {
    console.log(data)
    console.log("ACA TERMINA LA PROMESA")
})