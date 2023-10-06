import React, { createContext, useContext, useState } from 'react'

export const TemaContext = createContext()

export const TemaProvider = ({children}) => {
    const [colorContexto, setColorContexto] = useState('Claro')
    const valores = { colorContexto, setColorContexto }
    return (
        <TemaContext.Provider value={valores}>
            {children}
        </TemaContext.Provider>
    )
}

export const useTemaContexto = () => {
    const contexto = useContext(TemaContext)
    return contexto
}
