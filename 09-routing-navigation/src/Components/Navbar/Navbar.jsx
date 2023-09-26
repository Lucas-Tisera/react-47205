import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <div style={styles.Navbar}>
        <h1>
            Navbar
        </h1>
        <div style={styles.Links}>
            <NavLink activeClassName to={"/"} >Home</NavLink>
            <NavLink activeClassName to={"/cart"} >Cart</NavLink>
            <NavLink activeClassName to={"/products"} >Products</NavLink>
        </div>
    </div>
    )
}

export default Navbar



const styles = {
    Navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem',
        borderBottom: '1px solid black'
    },
    Links: {
        width: '30%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}

