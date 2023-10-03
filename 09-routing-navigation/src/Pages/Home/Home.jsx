import React from 'react'
import Cart from '../Cart/Cart'
import Products from '../Products/Products'

const Home = () => {

  return (
    <>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <h2>Home</h2>
      </div>
      <Products/>
      <Cart/>
    </>
  )
}

export default Home