import { useState } from 'react';
import Form from './Form';
import withFormValidations from './Functions/FormValidations';

//Creamos un nuevo componente que recibe como parámetro el componente Form
//y lo envuelve con el HOC withFormValidations
//El nuevo componente se llama FormWhitValidation
//El componente FormWhitValidation es el que se renderiza en el componente ContainerHOC

// const FORMULARIOCONVALIDACIONES = VALIDACIONES(FORMULARIO)
const FormWhitValidation = withFormValidations(Form);

const ContainerHOC = () => {
  //Definimos el estado inicial del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //Manejador de eventos para el cambio de estado del formulario
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  //Renderizamos el formulario
  return (
    <div className="App">
      <FormWhitValidation
        formData={formData}
        onChange={handleChange}
      />
    </div>
  );
}

export default ContainerHOC;
