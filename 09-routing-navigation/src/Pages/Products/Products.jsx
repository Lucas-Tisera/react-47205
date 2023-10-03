import React from 'react'
import { Link } from 'react-router-dom'
import { useItems } from '../../Hooks/useItems'
import Cart from '../Cart/Cart'

const Products = () => {
    const items = useItems()
  return (
    <>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
      <h2>Products</h2>
    </div>
    {
      items.length > 0 ? 
      items.map((item) => {
        return (
          <div key={item.id} style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <Link state={{item: item}} to={`/products/${item.id}`}>{item.title}</Link>
          </div>
        )
      })
      : 
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <h2>Cargando...</h2>
      </div>
    }
    
    </>

  )
}

export default Products