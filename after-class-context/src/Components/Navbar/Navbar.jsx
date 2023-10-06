import React, { useState } from 'react'
import './Navbar.css'
import ReactSwitch from 'react-switch'
import { useTemaContexto } from '../../Context/TemaContext'

export const Navbar = () => {
  const {colorContexto, setColorContexto} = useTemaContexto()

  const [activo, setActivo] = useState(false)

  const handleSwitch = () => {
    setColorContexto(colorContexto === "Oscuro" ? "Claro" : "Oscuro" )
    setActivo(!activo)
  }

  return (
    <div className='Navbar'>
        {/* LOGO */}
        <h1 className='NavbarLogo'>Mi Logo</h1>
        {/* INPUT DE BUSQUEDA */}
        <div className='NavbarSearch'>
          <input id={colorContexto} type='text' placeholder='Buscar' />
        </div>
        {/* SWITCH DE COLOR */}
        <div className='NavbarList'>
          <ul>
              <li>Tema Oscuro</li>
              {/* LIBRERIA DE REACT */}
              <ReactSwitch 
                onChange={() => {handleSwitch()}}
                checked={activo}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
              />
          </ul>
        </div>
    </div>
  )
}
