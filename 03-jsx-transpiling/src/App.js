
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
import { memo, useEffect, useState } from 'react';
function App() {
  const [numero3, setNumero3] = useState(3)
  console.log(numero3)
  const [tipoFormulario , setTipoFormulario] = useState("login")
  const [themeRed, setThemeRed] = useState(true)

  const FORM2 =memo(({children})=> {
    return (
      <div>
          {children}
        <h1>
          Los de arriba son mis elementos hijos
        </h1>
      </div>
    )
  })
  
  const Titulo =({titulo})=> {
    return (
      <div>
        <h1>
          {titulo}
        </h1>
      </div>
    )
  }
  
  useEffect(()=>{
    console.log("Se ejecuto el useEffect")
  },[tipoFormulario])


  return (
    <div>
      <h1>{tipoFormulario}</h1>
      <h1 className={themeRed ? "miTituloRojo" : "miTituloAzul"}>React App</h1>
      <input type='button' onClick={() =>setThemeRed(!themeRed) } value={"Cambiar Titulo"}/>
      <input type="button" onClick={() => setTipoFormulario("Registro")} value={"Registrarme"}/>

      {/* <Titulo titulo={"Titulo del formulario"}>

      </Titulo>

      <FORM2>
        <h1>
          Chau
        </h1>
        <input type="button"></input>
      </FORM2> */}

      {/* {
       (tipoFormulario === "login") ? 
       <FormularioLogin themeRed={themeRed} setThemeRed={setThemeRed} numeros={4} titulo="MI TITULO"/> : 
       <FormularioRegistro/>
      } */}
      {/* <button onClick={() => setTipoFormulario("registro")}>Registrarme</button> */}
    </div>
  )
}

export default App;
