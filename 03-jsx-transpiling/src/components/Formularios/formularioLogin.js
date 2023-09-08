import InputUsuario from './InputUsuario/InputUsuario'

const FormularioLogin = ({setThemeRed , themeRed}) => {
    return (
      <>
        <h1> LOGIN </h1>
        <InputUsuario/>
        <input type="text" placeholder='contraseña'/>
        <input type="button" onClick={()=> setThemeRed(!themeRed)} value='Aceptar'/>
        
      </>
    )
}

export default FormularioLogin;