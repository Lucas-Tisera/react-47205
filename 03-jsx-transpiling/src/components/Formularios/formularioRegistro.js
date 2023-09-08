import InputUsuario from "./InputUsuario/InputUsuario";

const FormularioRegistro = () => {
    return (
      <>
        <h1> REGISTRATE </h1>
        <InputUsuario/>
        <input type="text" placeholder='contraseña'/>
        <input type="text" placeholder='email'/>
        <input type="text" placeholder='telefono'/>
      </>
    )
}
 export default FormularioRegistro;