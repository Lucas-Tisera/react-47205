import React from 'react'

export const Select = ({options, onSelect, defaultOption}) => {
    return options.map((option) => (
        <>
            <input
                onChange={(e) => onSelect(option.value)} 
                type='radio' 
                name='color' 
                checked={defaultOption === option.value} 
                id={option.value}
            />
            <label for={option.value}>{option.text}</label>
        </>
    ))
}
