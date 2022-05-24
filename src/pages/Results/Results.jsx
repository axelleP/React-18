import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { SurveyContext } from '../../utils/context/context'
import { useFetch } from '../../utils/hooks/hooks'
import '../../styles/Results.css';

//formate le titre d'un métier
export function formatJobList(title, listLength, index) {
    if (index === listLength - 1) {
        return title
    }
    return `${title},`
}

//formate les réponses du questionnaire pour les passer dans l'url API
export function formatFetchParams(answers) {
    const answerNumbers = Object.keys(answers)//numéros des réponses

    /* reduce ((boucle sur les n° de réponses):
     * previousParams = paramètres de l'url se mettant à jour à chq boucle. Initialisé à ''
     * answerNumber = le numéro de la réponse active
    */
    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstParam = index === 0
        const separator = isFirstParam ? '' : '&'
        
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, '')
}

function Results() {
    const { answers } = useContext(SurveyContext)//récupération des réponses du questionnaire
    const fetchParams = formatFetchParams(answers)//mise en forme des paramètres pour l'url API
    const { data, isLoading, error } = useFetch(`http://localhost:8000/results?${fetchParams}`)//appel API
    const { resultsData } = data//rappel : le nom de la var doit être le même que le nom renvoyé par l'API

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
    
    return isLoading ? (
        <div data-testid="loader" className="mt-5 d-flex justify-content-center">
            <div className="spinner-border justify-content-center" role="status"></div>
        </div>
    ) : (
        <div className="row p-5 align-items-center bg-grey">
            <div className="text-center h2">
                <span>Les compétences dont vous avez besoin :</span>
                <div className="colored-text">
                {/* boucle et affiche le titre pour chaques résultats */}
                {resultsData && resultsData.map(({ title }, index) => (
                    <span key={index}>{formatJobList(title, resultsData.length, index)}</span>
                ))}
                </div>
                <div><Link to="/freelances" className="mt-5 px-5 btn rounded-pill bg-purple">Découvrez nos profils</Link></div>
            </div>
            
            {/* boucle et affiche le titre et la description pour chaques résultats */}
            <div>
            {resultsData && resultsData.map(({ title, description }, index) => (
                <div key={index} className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 mt-5 mx-5">
                        <span data-testid="result-title" className="colored-text">{ title }</span>
                        <p data-testid="description" className="p-results">{ description }</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Results;