import React, { useState } from 'react'

export default props => {
    let [nome, setNome] = useState('Pedro')
    
    return (
        <>
            <p>{nome}</p>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
        </>
    )
}