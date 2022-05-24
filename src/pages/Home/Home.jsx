import { Link } from 'react-router-dom'
import HomeIllustration from '../../assets/home-illustration.svg'

function Home() {
   return (
        <div className="row p-5 align-items-center bg-grey">
            <div className="col-6">
                <h1 className="row fw-bold">Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</h1>
                <br/>
                <Link to="/survey/1" className="row px-5 btn rounded-pill bg-purple">Faire le test</Link>
            </div>
            <span className="col text-center"><img className="w-75" src={HomeIllustration} alt="home"/></span>  
        </div>
    )
}

export default Home;
