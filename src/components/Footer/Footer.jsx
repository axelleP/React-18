import { useContext } from 'react'
import { ThemeContext } from '../../utils/context/context'
import EmailInput from '../EmailInput/EmailInput'
import '../../styles/Footer.css';

function Footer() {
    /*
      récupère la fonction toggleTheme et la var theme dans '../../utils/context/context'
      ces vars sont accessibles car Footer est dans la balise ThemeProvider dans index.jsx
    */
    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <footer className="row mt-5 text-center">
            <span className="col-3"></span>
            <span className="col-6">
                <EmailInput/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn rounded-pill bg-purple" onClick={() => toggleTheme()}>Changer de mode {theme === 'light' ? '☀️' : '🌙'}</button>
            </span>
            <span className="col-3"></span>
        </footer>
    )
}

export default Footer;