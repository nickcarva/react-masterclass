import React, { useState } from 'react'

import Button from './Button'

export default props => {
    const [numbers, setNumbers] = useState(Array(props.qtdNumbers).fill(0))

    const generateNumbersNotIncluded = array => {
        let randNumber = parseInt(Math.floor(Math.random() * (60 - 1) + 1))

        return array.includes(randNumber)
            ? generateNumbersNotIncluded(array) 
            : randNumber
    }

    const generateNumbers = () => {
        const genNumbers = Array(props.qtdNumbers)
            .fill(0)
            .reduce(a => [...a, generateNumbersNotIncluded(a)], [])
            .sort((a, b) => a - b)
        
        setNumbers(genNumbers)
    }

    return (
        <>
            <h4>{numbers.join(' ')}</h4>
            <Button onGenerate={generateNumbers} />
        </>
    )
}