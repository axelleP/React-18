//un contexte est un moyen de partager simplement les props entre les composants.
import { createContext, useState} from 'react'

//CONTEXTE THEME
export const ThemeContext = createContext('light')

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')//theme à light par défaut
    const toggleTheme = () => {//fonction pour modifier la valeur de theme
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
 
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>{/* rend accessible la var theme et la fonction toggleTheme */}
            {children}
        </ThemeContext.Provider>
    )
}

//CONTEXTE SURVEY
export const SurveyContext = createContext([])

export const SurveyProvider = ({ children }) => {
    const [answers, setAnswers] = useState([])
    const updateAnswers = (newAnswer) => {
        if (Object.entries(newAnswer).length === 0) {//si on a une réponse vide => click sur le lien "Réinitialiser le questionnaire"
            setAnswers([])//réinitialise les réponses du questionnaire
        } else {
            setAnswers({ ...answers, ...newAnswer })//sinon on ajoute la réponse
        }
    }
 
    return (
        <SurveyContext.Provider value={{ answers, updateAnswers }}>
            {children}
        </SurveyContext.Provider>
    )
}