import { useEffect, useState } from 'react';
import './App.css';
import ContainerHOC from './Components/HOC/Container';
import ContainerRenderProps from './Components/RenderProps/Container';
import Listado from './Components/Listado';

/* const Box = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        {props.children}
      </div>
      <input type="button" value="Enviar" />
    </div>
  )
}

    <div className="App">
      <Box title={"Formulario"}>
        <input type="text" />
      </Box>
      
      <Box title={"Blog"}>
        <p>Esto es un texto de ejemplo</p>
        <p>Esto es el segundo texto</p>
      </Box>
      </div>
      */




    // EJEMPLO PASAR DATOS A COMPONENTE Y SETEAR OBJETOS
     /* const [listado, setListado] = useState({})
     
     let objeto = { 
       fechaInicio: "2021-01-01", 
       listaItems: [producto1, producto2]
     }
     console.log(listado)
     useEffect(()=>(
       setListado(objeto)
     ),[])
     <ListadoView listado={listado} /> */

function App() {
  const [totalProductos, setTotalProductos] = useState(0)
  const [lista, setLista] = useState([])
  
  useEffect(()=>(
    setTotalProductos(lista.length)
  ),[lista])

  return (
    <>
      <h1>AfterClass</h1>
      <h2> CONTADOR: </h2>
      <h3>{totalProductos}</h3>
      <Listado setLista={setLista} />
      {/* <ContainerHOC /> */}
      {/* <ContainerRenderProps /> */}
    </>
  );
}

export default App;
