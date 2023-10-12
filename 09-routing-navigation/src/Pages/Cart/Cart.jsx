import React, { useContext, useState } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'

const Cart = () => {
  
  const {productosCarrito, eliminarProducto} = useContext(CarritoContext) 
  const [nombre, setNombre] = useState("Lucas")
  const [email, setEmail] = useState("lucas@gmail.com")
  const [numero, setNumero] = useState(1123456789)


  const dataBase = getFirestore()
  const ordersCollection = collection(dataBase, "orders")

  const crearOrden = () => {
    const total = productosCarrito.reduce((acum, item) => acum + item.precio, 0)
    const orderData = {
      buyer: {
        name: nombre,
        phone: numero,
        email: email
      },
      items: [...productosCarrito],
      total: total
    }

    addDoc(ordersCollection, orderData).then(({id}) => console.log(id))


  }
  const crearItem = () => {
    const total = productosCarrito.reduce((acum, item) => acum + item.precio, 0)
    const orderData = {
      buyer: {
        name: nombre,
        phone: numero,
        email: email
      },
      items: [...productosCarrito],
      total: total
    }

    addDoc(ordersCollection, orderData).then(({id}) => console.log(id))
    productosCarrito.map((item) => {
      actualizarOrden(item.id)
    })
  }

  const actualizarOrden = (id)=> {
    const orderDocument = doc(ordersCollection, id )
    updateDoc(orderDocument, {buyer: {
      name: "Juan",
      phone: "123456",
      email: "lucas@gmail.com"
    }})
    console.log("Orden actualizada")
  }

  const actualizarOrdenPorLotes = ()=> {
    productosCarrito.map((item) => {
      setOrderItem(doc(ordersCollection, item.id ))
    })

    const Documento1 = doc(ordersCollection, "fG3x6nc1JB6IEvD1213L" )
    const Documento2 = doc(ordersCollection, "0QWrk7liiDrpK6gydzx1" )
    const batch = writeBatch(dataBase)

    batch.update(Documento1, {total:2000} )
    batch.set(Documento2, {buyer: {
      name: "Pepe",
      phone: "77777",
      email: "pepe@gmail.com"
    }})
    batch.commit()
  }
  return (
    <>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
      <h2>Cart</h2>
      </div>
      <div>
        <input type={"text"} onChange={(e)=> setNombre(e.target.value)} placeholder='Nombre'>
        </input>
      </div>
      {
      productosCarrito.length > 0 ? 
      productosCarrito.map((item) => {
        return (
          <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <h4>{item.titulo}</h4>
            <button style={{
                backgroundColor: "rebeccapurple",
                color: "white",
                borderRadius: "5px",
                padding: "10px",
                cursor: "pointer",
                border: "none",
                margin: "10px"
            }} onClick={()=> eliminarProducto(item.id)}> Eliminar del carrito </button>
          </div>
        )
      })
      : 
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <span>Debe agregar productos al carrito</span>
      </div>
    }
    <div style={styles.buttonContainer}>
      <button style={styles.Productos} onClick={crearOrden}>Comprar</button>
      <button style={styles.Productos} onClick={actualizarOrden}>Actualizar Documento</button>
      <button style={styles.Productos} onClick={actualizarOrdenPorLotes}>Actualizar Documento por Lotes</button>
    </div>
    </>
  )
}

export default Cart

const styles = {
  Productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "20%",
    borderRadius: "10px",
    border: "1px solid black",
    margin: "5px",
    padding: "5px",
    cursor: "pointer",
    color : "white",
    textDecoration: "none",
    backgroundColor: "rebeccaPurple",
  },
  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
  }
}