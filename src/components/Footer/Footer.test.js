import Footer from './Footer.jsx'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context/context.jsx'

describe('Footer', () => {
    test('Should change theme', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )

        //simulation du changement d'interface par le bouton "Changer de mode"
        const nightModeButton = screen.getByRole('button')//récupère button
        expect(nightModeButton.textContent).toBe('Changer de mode ☀️')//l'app a le bouton initialisé à light par défaut
        fireEvent.click(nightModeButton)//simule le click sur le bouton
        expect(nightModeButton.textContent).toBe('Changer de mode 🌙')//le bouton s'affiche maintenant dans le thème dark
    })
})