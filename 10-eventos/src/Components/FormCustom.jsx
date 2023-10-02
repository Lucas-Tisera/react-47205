import React from 'react'

export const FormCustom = () => {
    
    const handleSubmit = (event) => {
      event.preventDefault()
      const data = new FormData(event.target)
      const values = Object.fromEntries(data.entries())
      console.log(values)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' name='nombre' placeholder='Nombre:'/>
        <input type='text' name='apellido' placeholder='Apellido:'/>
        <button type='submit'>Enviar</button>
    </form>
  )
}
