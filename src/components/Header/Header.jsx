import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import '../../styles/Header.css';
 
function Header() {
    //change la couleur des titres du menu quand un menu est sélectionné
    function changeColor(target) {
        const link = document.querySelectorAll("a")
        
        for (const item of link) {
            if (target.innerHTML === item.innerHTML) {
                target.classList.add("selected")
            } else {
                item.classList.remove("selected")
            }
        };
    }
  
    return (
        <div className="row text-decoration-none mb-5">
            {/* logo du site */}
            <img className="col-8 col-sm-6 col-md-4 col-lg-2" src={Logo} alt="freelance" />
            {/* menu */}
            <nav className="col-10 text-end">
                <Link to="/" onClick={e => changeColor(e.target)}>Accueil</Link>
                <Link to="/freelances" className="mx-5" onClick={e => changeColor(e.target)}>Profils</Link>
                <Link to="/survey/1" className="btn rounded-pill bg-purple" onClick={e => changeColor(e.target)}>Faire le test</Link>
            </nav>
        </div>
    )
}

export default Header