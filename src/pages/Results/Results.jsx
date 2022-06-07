import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { SurveyContext } from '../../utils/context/context'
import { useFetch } from '../../utils/hooks/hooks'
import EmptyList from '../../components/EmptyList/EmptyList';
import '../../styles/Results.css';

//formate le titre d'un métier
export function formatJobTitle(title, listLength, index) {
    if (index === listLength - 1) {
        return title
    }
    return `${title}, `
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
    const { data, error } = useFetch(`http://localhost:8000/results?${fetchParams}`)//appel API
    const { resultsData } = data//rappel : le nom de la var doit être le même que le nom renvoyé par l'API

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
    
    //si l'utilisateur n'a coché aucun Oui
    if (resultsData && resultsData.length === 0) {
        return <EmptyList />
    }
    
    return !resultsData ? (//icône de chargement
        /* data-testid : on s'en sert pour nos tests dans Results.test.js */
        <div className="mt-5 d-flex justify-content-center" data-testid="loader">
            <div className="spinner-border justify-content-center" role="status"></div>
        </div>
    ) : (
        <div className="row p-5 align-items-center bg-grey">
            <div className="text-center h2">
                <span>Les compétences dont vous avez besoin :</span>
                <div className="colored-text">
                {/* boucle et affiche le titre pour chaques résultats */}
                {resultsData.map(({ title }, index) => (
                    <span className="capitalize" key={index}>{formatJobTitle(title, resultsData.length, index)}</span>
                ))}
                </div>
                <div><Link className="mt-5 px-5 btn rounded-pill bg-purple" to="/freelances">Découvrez nos profils</Link></div>
            </div>
            
            {/* boucle et affiche le titre et la description pour chaques résultats */}
            <div>
            {resultsData.map(({ title, description }, index) => (
                <div className="row justify-content-center" key={index}>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 mt-5 mx-5">
                        <span className="colored-text capitalize" data-testid="result-title">{ title }</span>
                        <p className="p-results" data-testid="description">{ description }</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Results;