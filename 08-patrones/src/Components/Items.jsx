import { useState } from "react";

const Items = ({nombre, setLista}) => {
    const [contador, setContador] = useState(0)
    const main = (accion)=>{
        switch (accion){
            case "suma":
                setContador(contador + 1)
                break;
            case "resta":
                setContador(contador - 1)
                break;
            case "reset":
                setContador(0)
                break;    
                case "add":
                    setLista(prev => [...prev, {nombre: nombre, cantidad: contador}])
                    break
        }
    }

    return(
        <div>
            <h1>{nombre} - {contador}</h1>
            <button onClick={() => main("suma")}>Sumar</button>
            <button onClick={() => main("resta")}>Restar</button>
            <button onClick={() => main("reset")}>Eliminar todos los productos</button>
            <button onClick={() => main("add")}>Agregar al Carro</button>
        </div>
    )
}

export default Items