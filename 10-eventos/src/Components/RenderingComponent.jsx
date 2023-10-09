import React from 'react'
import { estilos } from '../App'



export const RenderingComponent = ({obteniendoDatos, colorTema}) => {
  return (
    <div>
        <h1 style={colorTema === "oscuro" ? estilos.temaOscuro : estilos.temaClaro} > Estado: {obteniendoDatos ? "Loading..." : "ya tenemos los datos"}</h1>
    </div>
  )
}
