import Card from './Card.jsx'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context/context.jsx'

describe('Card', () => {
    test('Should render title and image', async () => {
        //le DOM doit renvoyer ces props
        render(
            <ThemeProvider>
                <Card
                    key="1"
                    label="label"
                    picture="/picture.png"
                    title="title example"
                />
            </ThemeProvider>
        )
        
        //vérifie que l'image et le texte renvoyés correspondent bien aux props passées ci-dessus
        const img = screen.getByRole('img')
        const title = screen.getByText(/title/i)
        expect(img.src).toBe('http://localhost/picture.png')
        expect(title.textContent).toBe('title example')
    })
})