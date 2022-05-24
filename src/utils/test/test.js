import { render as customRender } from '@testing-library/react'//crée un nouveau render nommé customRender
import { ThemeProvider, SurveyProvider } from '../context/context.jsx'
import { BrowserRouter } from 'react-router-dom'

//construit un render plus complet (route + theme + survey). rappel : wrapper = emballage
function Wrapper({ children }) {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <SurveyProvider>{children}</SurveyProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}
 
//permet d'appeler le nouveau render
export function render(ui) {
    customRender(ui, { wrapper: Wrapper })
}