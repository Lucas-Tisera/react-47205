import { useEffect, useState } from 'react';
import './App.css';
import { DivButton } from './Components/DivButton';
import { FormCustom } from './Components/FormCustom';
import { InputKeys } from './Components/InputKeys';
import { RenderingComponent } from './Components/RenderingComponent';
import { SelectComponent } from './Components/SelectComponent';

export const estilos = {
  temaOscuro:{
      backgroundColor: "black",
      color: "white",
  },
  temaClaro:{
      backgroundColor: "white",
      color: "black",
  }
}


function App() {
  const [condicion, setCondicion] = useState(true)
  const [tema, setTema] = useState("claro")
  useEffect(()=>{
    setTimeout(()=>{
      setCondicion(false)
    }, 5000)
  }, [])


  return (
    <div className="App">
      {/* <DivButton/> */}
      <InputKeys colorTema={tema} />
      {/* <FormCustom/> */}
      {/* <SelectComponent/> */}
      <RenderingComponent obteniendoDatos={condicion} colorTema={tema}/>
      <button onClick={()=>setTema(tema === "claro" ? "oscuro" : "claro")}>Cambiar Estado</button>
    </div>
  );
}

export default App;
