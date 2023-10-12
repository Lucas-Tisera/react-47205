import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'

const Item = () => {
    const location = useLocation()
    const product = location.state.item
    const { agregarProducto } = useContext(CarritoContext)
    
    return (
        <>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <div>
                <h2>Item: <p>{product.titulo}</p></h2>
                <h3>Id: {product.id}</h3>
            <button style={{
                backgroundColor: "rebeccapurple",
                color: "white",
                borderRadius: "5px",
                padding: "10px",
                cursor: "pointer",
                border: "none",
                margin: "10px"
            }} 
            onClick={() => agregarProducto(oldData => [...oldData, product])}>
                Agregar al carro
            </button>
            </div>

        </div>
        </>
    )
}

export default Item