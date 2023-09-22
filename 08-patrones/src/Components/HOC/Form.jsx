const Form = ({ formData, errors, validateForm, onChange }) => {
    //Manejador de eventos para el envío del formulario
    function handleSubmit(e){
        e.preventDefault();
        validateForm && validateForm();
    }

    //Renderizamos el formulario
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre: </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => onChange(e)}
                />
                {errors && errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={(e) => onChange(e)}
                />
                {errors && errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Contraseña: </label>
                <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={(e) => onChange(e)}
                />
                {errors && errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form;