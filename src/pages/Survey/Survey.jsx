import { useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { SurveyContext, ThemeContext } from '../../utils/context/context'//contextes
import { useFetch } from '../../utils/hooks/hooks'//hooks personnalisés
import Button from '../../styles/button'

function Survey() {
    let navigate = useNavigate();//permet d'utiliser la redirection sur une page
    //récupère le n° de la question actuelle
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)//parseInt : convertit en entier
    //numéro de question suivant et précédent
    const previous = questionNumberInt - 1
    const next = questionNumberInt + 1
    //récupère les données API, le statut du chargement et le statut de l'erreur
    //ne pas oublier de lancer 7150606-API-React-intermediaire en console pour accéder à http://localhost:8000
    const { data, error } = useFetch(`http://localhost:8000/survey`)
    const { surveyData } = data //rappel : le nom de la var doit être le même que le nom renvoyé par l'API
    /* vars accessibles car Survey est dans les balises SurveyProvider et ThemeProvider dans index.jsx */
    const { updateAnswers, answers } = useContext(SurveyContext)
    const { theme } = useContext(ThemeContext)
    
    //réinitialise le questionnaire
    function initSurvey() {
        updateAnswers({})
        navigate("/survey/1", { replace: true });//redirige sur la 1ere question
    }
    
    //sauvegarde la réponse à la question
    function saveReply(event, answer) {
        updateAnswers({ [questionNumberInt]: answer })
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
            {!surveyData ? (
                <div className="spinner-border" role="status"></div>/* icône de chargement */
            ) : (
                <span>
                    <div className="mt-5">{surveyData[questionNumberInt]}</div>{/* question */}

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
                        {surveyData[questionNumberInt + 1] && <Link className="mx-5 link" to={`/survey/${next}`}>Suivant</Link>}
                        {!(surveyData[questionNumberInt + 1]) && <Link className="mx-5 link" to="/results">Résultats</Link>}
                    </div>

                    <div className="mt-3"><span className="link pointer" onClick={initSurvey}>Réinitialiser le questionnaire</span></div>
                </span>
            )}
        </div>
    )
}

export default Survey;