import { useContext } from 'react'
import { EmailContext } from '../../utils/context/context'

function EmailInput() {
    const { updateEmail } = useContext(EmailContext)//var accessible car Footer est dans les balises EmailProvider dans index.jsx
    
    return (
        <span>
            <input placeholder="Entrez votre email" onChange={(e) => updateEmail(e.target.value)} />      
        </span>
    )
}

export default EmailInput