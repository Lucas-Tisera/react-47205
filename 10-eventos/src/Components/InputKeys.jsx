import React, { useState } from 'react'

export const InputKeys = () => {
    const [value, setValue] = useState('Hola')
    
    const handleKeyDown = (event) =>{
        console.log(event.key)
        if (event.key == "a"){
            console.log("NO PODES USAR LA A")
        } else {
            setValue(value + event.key)
        }

        if (event.key == "Backspace"){
            setValue(value.slice(0,-1))
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div style={styles.container}>
            <input value={value} onChange={handleChange} type='text' style={styles.input} />
        </div>
      )
    }
    
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
        },
        input: {
            padding: '1rem',
            borderRadius: '5px',
            fontSize: '1.5rem',
        }
        }
        