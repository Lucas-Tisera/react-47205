import { useState } from "react";

function Filtro({children}){
    const [fiterState, setFilterState] = useState('all');

    //Función que se encarga de cambiar el estado del filtro
    const handleFilterChange = (e) => {
        setFilterState(e.target.value);
    }

    //Le pasamos las props al componente que se renderizara dentro del Filter
    return children(fiterState, handleFilterChange)
}

export default Filtro;