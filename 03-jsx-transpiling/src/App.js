
import './App.css';

/* let logueado = true; */
  //Logica sin Sugar-sintax
  /* const estaLogueado = () => {
    if (logueado == true){
      return (
      <button>
        <p>
          Aceptar
        </p>
      </button>
      )
    } else {
      return (
          <button>
            <p>Cancelar</p>
          </button>
      )
    }
  } */
/*   return (
    <div className="App">
      <h1>React App</h1>
      {
        (logueado === true) ? 
        (
        <button>
          <p>
            Aceptar
          </p>
        </button>
        ) : (
          <button>
            <p>Cancelar</p>
          </button>
        )
      }
    </div>
  ); */
import FormularioLogin from "./components/Formularios/formularioLogin"
import FormularioRegistro from "./components/Formularios/formularioRegistro"
import { useState } from 'react';
function App() {
  const [numero3, setNumero3] = useState(3)
  console.log(numero3)
  const [tipoFormulario , setTipoFormulario] = useState("login")
  const [themeRed, setThemeRed] = useState(true)
  return (
    <div>
      <h1 className={themeRed ? "miTituloRojo" : "miTituloAzul"}>React App</h1>
      {
       (tipoFormulario === "login") ? 
       <FormularioLogin themeRed={themeRed} setThemeRed={setThemeRed} numeros={4} titulo="MI TITULO"/> : 
       <FormularioRegistro/>
      }
      <button onClick={() => setTipoFormulario("registro")}>Registrarme</button>
    </div>
  )
}

export default App;
