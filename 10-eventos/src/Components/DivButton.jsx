import React from 'react'

export const DivButton = () => {
  
  const handleClickButton = (event)=> {
    event.stopPropagation()
    console.log('Click en el botón')
  }
  const handleClickDiv = (event)=> {
    event.stopPropagation()

    console.log('Click en el div rojo')
  }

  const handleClickDivFuera = ()=> {
    console.log('Click en el div azul')
  }
  
  return (
    <div onClick={handleClickDivFuera} style={styles.container}>
      <div onClick={handleClickDiv} style={styles.divButton}>
        <button onClick={handleClickButton} style={styles.button}>
          Click
        </button>
      </div>
     </div>
  )
}

const styles = {
    divButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'blue'
    },
    button: {
        padding: '1rem',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }
    }
    