import Home from './Home.jsx'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context/context.jsx'
import { BrowserRouter } from 'react-router-dom'

describe('Home', () => {
    test('should render title', async () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </BrowserRouter>
        )

        //s'attend
        expect(
            screen.getByRole('heading', {//à ce que la présence d'un titre
                level: 1,//de level 1 (h1)
                text:'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents',//contenant ce texte
            })
        ).toBeTruthy()//soit vrai
    })
})