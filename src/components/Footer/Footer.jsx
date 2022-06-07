import { useContext } from 'react'
import { ThemeContext } from '../../utils/context/context'
import EmailInput from '../EmailInput/EmailInput2'
import { EmailContext } from '../../utils/context/context'

function Footer() {
    /* vars accessibles car Footer est dans les balises ThemeProvider et EmailProvider dans index.jsx */
    const { toggleTheme, theme } = useContext(ThemeContext)
    const { email } = useContext(EmailContext)

    return (
        <footer className="mt-5 text-center">
            <span className="row">
                <span className="col-3"></span>
                <span className="col-6">
                    <EmailInput/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn rounded-pill bg-purple" onClick={() => toggleTheme()}>Changer de mode {theme === 'light' ? '☀️' : '🌙'}</button>
                </span>
                <span className="col-3"></span>
            </span>
            {email}  
        </footer>
    )
}

export default Footer;