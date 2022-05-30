import { useState } from 'react'

function EmailInput() {
    const [inputValue, setInputValue] = useState('')
    
    return (
        <span>
            {inputValue}
            &nbsp;&nbsp;
            <input placeholder="Entrez votre email" onChange={(e) => setInputValue(e.target.value)} />
        </span>
    )
}

export default EmailInput