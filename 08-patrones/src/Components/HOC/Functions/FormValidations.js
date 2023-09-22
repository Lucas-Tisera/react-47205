import { useState } from "react";

const withFormValidations = (WrappedComponent) => {
    //Creamos un componente que se encargue de las validaciones del formulario
    const FormValidations = (props) => {
        const [errors, setErrors] = useState({});
        
        function validateForm() {
            const newErrors = {};
            if (!props.formData.name) {
                newErrors.name = "Name is required!";
            }
            if (!props.formData.email) {
                newErrors.email = "Email is required!";
            }
            if (!props.formData.password) {
                newErrors.password = "Password is required!";
            }
            setErrors(newErrors);
        }
        //Pasamos las props al componente que recibe el HOC
        return (
            //Le pasamos las props al componente que recibe el HOC
            //Le pasamos las funciones que se encargan de las validaciones
            //Le pasamos el estado de los errores
            <WrappedComponent
                {...props}
                errors={errors}
                validateForm={validateForm}
            />
        );

    }

    //Le damos un nombre al componente que devuelve el HOC
    return FormValidations;
}

export default withFormValidations;
