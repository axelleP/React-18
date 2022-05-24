import Card from './Card.jsx'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context/context.jsx'

//Note : test <=> it

describe('Card', () => {
    test('Should render title and image', async () => {
        //ce que renvoi le DOM
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
        expect(title.textContent).toBe(' title example ')
        
    })
    
    it('Should render title with stars', async () => {
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
        
        const title = screen.getByText(/title/i)
        const card = title.closest('.wrapper');//closest : accéde au parent '.wrapper' le plus proche pour ce titre
        
        expect(title.textContent).toBe(' title example ')//vérifie la présence du texte sans smiley
        fireEvent.click(card)//simule le click sur card
        expect(title.textContent).toBe('⭐ title example ⭐')//vérifie la présence du texte avec smiley
        /* rque : normalement on aurait du mettre des espaces en plus : toBe(' ⭐ title example ⭐ ') 
        mais il faut p-ê les enlever à cause des émojies */
    })
})