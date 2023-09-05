
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

const estilos = {
  
}

function App() {
  let tipoFormulario = "registro"
  let rojo = true
  return (
    <div>
      <h1 className={rojo ? "miTituloRojo" : "miTituloAzul"}>React App</h1>
      
      {
       (tipoFormulario === "login") ? <FormularioLogin/> : <FormularioRegistro/>
      }
    </div>
  )
}

export default App;
