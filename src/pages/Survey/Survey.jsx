import { useContext } from 'react'
//import { useParams, useNavigate, Link } from 'react-router-dom' => Exemple avec useNavigate
import { useParams, Link } from 'react-router-dom'//useParams pour récupérer les params de l'url
import { SurveyContext, ThemeContext } from '../../utils/context/context'//contextes
import { useFetch } from '../../utils/hooks/hooks'//hooks personnalisés
import Button from '../../styles/button'

function Survey() {
    //récupère le n° de la question actuelle
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)//parseInt : convertit en entier
    //numéro de question suivant et précédent
    const previous = questionNumberInt - 1
    const next = questionNumberInt + 1
    //récupère les données API, le statut du chargement et le statut de l'erreur
    //ne pas oublier de lancer 7150606-API-React-intermediaire en console pour accéder à http://localhost:8000
    const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
    /* attention surveyData est indéfini tant que data n'est pas initialisé dans l'appel API donc on vérifie que surveyData est définie
    avant de s'en servir. Ex : surveyData && surveyData[questionNumberInt] */
    //de plus il faut nommer la var comme dans celle renvoyée par l'API !
    const { surveyData } = data 
    /* récupère la fonction updateAnswers et la var answers renvoyés par SurveyProvider() dans le fichier context.jsx
    ces var sont accessibles car Survey est dans la balise SurveyProvider dans index.jsx */
    const { updateAnswers, answers } = useContext(SurveyContext)
    const { theme } = useContext(ThemeContext)
    
    //exemple navigation
//    let navigate = useNavigate();
    
    //réinitialise le questionnaire
    function initSurvey() {
        updateAnswers({})
    }
    
    //sauvegarde la réponse à la question
    function saveReply(event, answer) {
        updateAnswers({ [questionNumberInt]: answer })
        
        //Je laisse en exemple mais je ne m'en sert plus :
        //s'il n'y a plus d'autres questions
//        if (!(surveyData[questionNumberInt + 1])) {
//            event.preventDefault();//stop le traitement après le click
//            navigate("/results", { replace: true });//redirige sur la page de résultats
//        }
    }
   
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
        <div className="text-center">
            <h1 className="underline-purple">Question {questionNumberInt}</h1>{/* n° question */}
            {isLoading ? (
                <div className="spinner-border" role="status"></div>/* icône de chargement */
            ) : (
                <div className="mt-5">{surveyData && surveyData[questionNumberInt]}</div>/* question */
            )}
            
            {/* boutons Oui et Non */}
            <div className="row mt-5 justify-content-center">
                <Button className="col-2 p-3 mx-2 btn rounded-pill button" 
                onClick={(e) => saveReply(e, true)}
                isSelected={answers[questionNumber] === true}
                theme={theme}
                >Oui</Button>
                
                <div className="col-auto"></div>
                
                <Button className="col-2 p-3 mx-2 btn rounded-pill button" 
                onClick={(e) => saveReply(e, false)}
                isSelected={answers[questionNumber] === false}
                theme={theme}
                >Non</Button>
            </div>
            
            {/* liens
             * rque : on utilise le caractère ` en jsx pour concaténer une chaîne et une variable */}
            <div className="mt-5">
                {questionNumberInt !== 1 && <Link className="mx-5 link" to={`/survey/${previous}`}>Précédent</Link>}
                {surveyData && surveyData[questionNumberInt + 1] && <Link className="mx-5 link" to={`/survey/${next}`}>Suivant</Link>}
                {surveyData && !(surveyData[questionNumberInt + 1]) && <Link className="mx-5 link" to="/results">Résultats</Link>}
            </div>
                    
            <div className="mt-3"><span className="link pointer" onClick={initSurvey}>Réinitialiser le questionnaire</span></div>
        </div>
    )
}

export default Survey;