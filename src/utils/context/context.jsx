//Utilité : un contexte est un moyen de partager simplement les props entre les composants

import { createContext, useState} from 'react'

/* Thème du site */
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

/* Questionnaire */
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

/* Email rentré par l'utilisateur */
export const EmailContext = createContext('')

export const EmailProvider = ({ children }) => {
    const [email, setEmail] = useState('')
    const updateEmail = (inputEmail) => {
        if (inputEmail !== '') {
            setEmail('Récupération de votre email ! : ' + inputEmail)
        } else {
            setEmail('')
        }
    }
 
    return (
        <EmailContext.Provider value={{ email, updateEmail }}>
            {children}
        </EmailContext.Provider>
    )
}