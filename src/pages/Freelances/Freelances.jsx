import Card from '../../components/Card/Card2';
import { useFetch } from '../../utils/hooks/hooks'
import { Link } from 'react-router-dom'
import '../../styles/Freelances.css'

function Freelances() {
    const { data, isLoading, error } = useFetch(`http://localhost:8000/freelances`)
    const { freelancersList } = data//rappel : le nom de la var doit être le même que le nom renvoyé par l'API

    //si l'API a renvoyée une erreur
    if (error) {
        return (
            <div className="row">
                <span className="col col-sm-2 col-md-3 col-lg-4"></span>
                <span className="col-12 col-sm-8 col-md-6 col-lg-4 d-flex justify-content-center alert alert-danger" role="alert">
                    <strong>Erreur!</strong>&nbsp; Oups il y a eu un problème.
                </span>
                <span className="col col-sm-2 col-md-3 col-lg-4"></span>
            </div>
        )
    }
    
    return (
        <div>
            <div  className="text-center">
                <h1 className="mb-5">Trouvez votre prestataire</h1>
                <span className="text-secondary">Chez Shiny nous réunissons les meilleurs profils pour vous.</span>
            </div>
            
            {/* data-testid : on s'en sert pour nos tests dans Freelances.test.js */}
            {isLoading ? (
                <div data-testid="loader" className="mt-5 d-flex justify-content-center">{/* loader : îcone de chargement */}
                    <div className="spinner-border justify-content-center" role="status"></div>
                </div>
            ) : (
                <div id="cards" className="row d-flex justify-content-center mt-5">
                    {freelancersList && freelancersList.map((freelance) => (
                        <Link className="col-8 col-md-4 m-4 h5 wrapper text-decoration-none" to={`/freelance/${freelance.id}`} key={`${freelance.name}-${freelance.id}`}>
                            <Card
                                label={freelance.job}
                                picture={freelance.picture}
                                title={freelance.name}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Freelances;