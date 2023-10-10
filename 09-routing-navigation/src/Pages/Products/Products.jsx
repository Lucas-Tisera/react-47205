import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useItems } from '../../Hooks/useItems'
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'

const Products = () => {
  const [items, setItems] = useState([])
  //OBTENER UN DOCUMENTO POR ID DE FIREBASE
  /* const itemRef = doc(db, "items", "2L8aeeX0swnU0Y9NXKDs")
  getDoc(itemRef).then((documento) => {
    console.log(documento.data())
  }) */
  
  useEffect(() => {
    const db = getFirestore();
    const myquery = query(collection(db, "items"), where("categoria", "==", "ropa"))
    getDocs(myquery).then(res =>
      setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))))
  }, [])
  console.log(items)
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
            {<Link state={{item: item}} to={`/products/${item.id}`}>{item.titulo}</Link>}
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