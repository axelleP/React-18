import Freelances from './Freelances.jsx'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test/test.js'

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
        return res(ctx.json({ freelancersList: freelancersMockedData }))
    })
)
 

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

//tests
test('Should render without crash', async () => {
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