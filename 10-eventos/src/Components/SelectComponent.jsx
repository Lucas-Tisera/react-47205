import React, { useState } from 'react'
import { Select } from './Select'

export const SelectComponent = () => {
    const [option, setOption] = useState('blue')
    const options = [
        { value: 'red', text: 'Red' },
        { value: 'blue', text: 'Blue' },
        { value: 'green', text: 'Green' },
    ]

    const optionSelected = (value) => {
        setOption(value)
    }

    return (
    <>
        <Select 
            options={options}
            onSelect={optionSelected}
            defaultOption={option}
        />
        <p>Seleccionada: {option}</p>
    </>
  )
}

