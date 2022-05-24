//Attention ! les fonctions à tester doivent avoir le mot "export" devant "function" pour pouvoir être utilisées ici !
import Results, { formatJobList, formatFetchParams } from './Results.jsx'
import { rest } from 'msw'//pour une API de type REST
import { setupServer } from 'msw/node'//pour configurer un serveur
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test/test.js'//render personnalisé

/* 
 * fonction describe(nomTests, fonction détaillant les tests) : on utilise pour englober plusieurs tests
 * fonction test(nomTest, fonction de test)
 * 
 * autres fonctions de Jest : toBe, toContain, ...
*/
describe('La fonction formatJobList', () => {
    test('Ajoute une virgule au titre', () => {
        const expectedState = 'titre2,'//exemple de valeur attendue
        
        //on s'attend (expect) à ce que le rendu de la fonction formatJobList(...) soit égale (toEqual) à notre var expectedState
        //formatJobList('titre2', 3, 1)) : titre = titre2, longueur du tableau = 3 et position du titre = 1 donc 2eme position du tableau
        expect(formatJobList('titre2', 3, 1)).toEqual(expectedState)
    })
    
    test('N\'ajoute pas de virgule pour le dernier titre', () => {
        const expectedState = 'titre3'
        expect(formatJobList('titre3', 3, 2)).toEqual(expectedState)//titre en dernière position du tableau
    })
})

describe('La fonction formatFetchParams', () => {
    test('Retourne un seul paramètre', () => {
        const expectedState = 'a1=reponse1'
        expect(formatFetchParams({1: 'reponse1'})).toEqual(expectedState)
    })
    
    test('Retourne plusieurs paramètres avec le séparateur &', () => {
        const expectedState = 'a1=reponse1&a3=reponse3'
        expect(formatFetchParams({1: 'reponse1', 3: 'reponse3'})).toEqual(expectedState)
    })
})

//exemple de données API renvoyées
const resultsMockedData = [
    {
        title: 'Title1',
        description: 'Description1',
    },
    {
        title: 'Title2',
        description: 'Description2',
    },
]

//simulation du serveur d'API
const server = setupServer(
    rest.get('http://localhost:8000/results', (req, res, ctx) => {
        return res(ctx.json({ resultsData: resultsMockedData }))//les données retournées par l'API
    })
)
 
beforeAll(() => server.listen())//avant les tests : lance la simulation
afterEach(() => server.resetHandlers())//après chaques tests : réinitialisation des éventuels paramètres du serveur
afterAll(() => server.close())//après les tests : ferme la simulation

//tests
test('Should display the results after the data is loaded', async () => {
    //Attention à l'ordre du code ! D'abord le DOM et le await waitForElementToBeRemoved !

    //DOM
    render(<Results />)
    
    //attend que le loader disparaisse pour avoir le résultat de l'API
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    
    const titleElements = screen.queryAllByTestId('result-title')
    const descriptionElements = screen.queryAllByTestId('description')
    
    //il doit y avoir 2 titres
    expect(titleElements.length).toBe(2)
    //le 1er titre doit être : titre1
    expect(titleElements[0].textContent).toBe('Title1')
    
    //il doit y avoir 2 descriptions
    expect(descriptionElements.length).toBe(2)
    //la 2eme description doit correspondre à la 2eme description dans resultsMockedData
    expect(descriptionElements[1].textContent).toBe(resultsMockedData[1].description)
})