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
            <NavLink className={"links"} activeClassName to={"/"} >Home</NavLink>
            <NavLink className={"links"} activeClassName to={"/products"} >Products</NavLink>
            <NavLink className={"links"} activeClassName to={"/cart"} >Cart</NavLink>
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
        justifyContent: 'space-around',
        alignItems: 'center',
        textDecoration: "none"
    }
}

