import Home from './Home.jsx'
import { render, screen } from '@testing-library/react'//screen : body qui contient notre composant
import { ThemeProvider } from '../../utils/context/context.jsx'
import { BrowserRouter } from 'react-router-dom'

describe('Home', () => {
    test('should render title', async () => {
        //DOM
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </BrowserRouter>
        )

        //s'attend
        expect(
            screen.getByRole('heading', {//à un titre
                level: 1,//de level 1 (h1)
                text:'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents',//contenant ce texte
            })
        ).toBeTruthy()
    })
})