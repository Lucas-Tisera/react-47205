import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useItems } from '../../Hooks/useItems'
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, updateDoc, where, writeBatch } from 'firebase/firestore'

const Products = () => {
  const [items, setItems] = useState([])
  //OBTENER UN DOCUMENTO POR ID DE FIREBASE
  /* const itemRef = doc(db, "items", "2L8aeeX0swnU0Y9NXKDs")
  getDoc(itemRef).then((documento) => {
    console.log(documento.data())
  }) */
  
  useEffect(() => {
    const db = getFirestore();
    const myquery = query(collection(db, "items"))
    getDocs(myquery).then(res =>
      setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))))
  }, [])
  
  return (
    <>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
      <h2>Products</h2>
    </div>
    <div style={{display: "flex"}}>
    {
      items.length > 0 ? 
      items.map((item) => {
        return (
          <Link style={styles.Productos} key={item.id} state={{item: item}} to={`/products/${item.id}`}>{item.titulo}</Link>
          )
        })
        : 
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <h2>Cargando...</h2>
      </div>
    }
    </div>
    
    </>

  )
}

export default Products

const styles = {
  Productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "80%",
    borderRadius: "10px",
    border: "1px solid black",
    margin: "5px",
    padding: "5px",
    cursor: "pointer",
    color : "white",
    textDecoration: "none",
    backgroundColor: "rebeccaPurple",
  }
}