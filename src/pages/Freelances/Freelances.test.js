import Freelances from './Freelances.jsx'
import { rest } from 'msw'//pour une API de type REST
import { setupServer } from 'msw/node'//pour configurer un serveur
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test/test.js'//render personnalisé

//exemple de données API renvoyées
const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
]
 
//simulation du serveur d'API
const server = setupServer(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        return res(ctx.json({ freelancersList: freelancersMockedData }))//les données retournées par l'API
    })
)
 

beforeAll(() => server.listen())//avant les tests : lance la simulation
afterEach(() => server.resetHandlers())//après chaques tests : réinitialisation des éventuels paramètres du serveur
afterAll(() => server.close())//après les tests : ferme la simulation

//tests
test('Should render without crash', async () => {
    //Attention à l'ordre du code ! D'abord le DOM et le await waitForElementToBeRemoved !
    
    //DOM
    render(<Freelances />)
    
    //attend que le loader disparaisse pour avoir le résultat de l'API
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    
    //s'attend à trouver les textes suivants dans le body
    expect(screen.getByText('Harry Potter')).toBeInTheDocument()
    expect(screen.getByText('Hermione Granger')).toBeInTheDocument()
    
    //exemples de code :
//    expect(screen.queryByTestId('loader')).not.toBeInTheDocument() //le loader ne doit plus être dans le DOM

    //s'attend à trouver les textes suivants dans le body
//    await waitFor(() => {
//        expect(screen.getByText('Harry Potter')).toBeTruthy()
//        expect(screen.getByText('Hermione Granger')).toBeTruthy()
//    })
})


