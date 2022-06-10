# <h1 align="center">👨‍💻 Formation React 18 👩‍💻</h1>

</br></br>

Apprentissage de React 18 par le tutoriel d'OpenClassrooms : [Créez une application React complète](https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete/7254167-tirez-le-maximum-de-ce-cours)

Documentation React : [Bien démarrer - React](https://fr.reactjs.org/docs/getting-started.html)

<br/>

[Définitions](#définitions)

[Voir les images du site Web](#images-du-site-web)

</br>

## Bibliothèques
- react ^18.0.0
- react-scripts ^5.0.1
- react-router-dom ^6.3.0 : gère le routage des pages (BrowserRouter, Routes, Route, Link, useParams)
- react-bootstrap ^2.3.0
- bootstrap ^5.1.3
- prop-types ^15.8.1 : permet de définir des règles pour les props
- msw ^0.41.0 : msw => Mock Service Worker. Le mook intercepte les appels API effectués par les composants lors des tests
- styled-components ^5.3.5 : pour inclure du CSS dans un composant JS. Surtout utile pour du CSS sous conditions

## Hooks
- useState : permet de stocker et de modifier une variable. La valeur de cette variable est conservée même si le composant est actualisé
- useEffect : permet d'effectuer une action une fois le rendu du composant terminé ou lorsqu'une variable du composant a été modifiée.  
On indique quelles variables déclenchent useEffect dans ce qu'on appelle un tableau de dépendances  
- useContext : permet d'accéder à une prop d'un composant parent directement depuis un composant enfant au lieu de passer la prop à tous les composants parents du composant enfant
- useParams : permet de récupérer les paramètres passés dans l'url
- useNavigate : permet de rediriger un utilisateur sur une autre page

## Compléments
- map() : cette fonction permet de boucler sur un tableau et d'afficher directement ses éléments dans du HTML
- on utilise le caractère \` en jsx pour concaténer une chaîne et une variable  
</br>Ex : `<Link to={`\``/survey/${next}`\``}>Suivant</Link>`
- JS :  
  - fetch : méthode native pour faire des appels API (alternative : axios par ex.)
- CSS :  
  - utilisation de variable :  
Ex :  
`:root { --purple-color: #5843e4; }`  
`.link:hover { color: var(--purple-color); }`

## Outils
### Extensions :
- ESLint : indique les erreurs dans le code depuis l'éditeur de texte
- React Developer Tools : extension de navigateur pour aider au développement. [Installation](https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation)

### Bibliothèques :
- Prettier : formate le code dans l'éditeur de texte
- PropTypes : permet par exemple de typer les variables, mettre une valeur par défaut ou encore rendre une valeur obligatoire

### Tests :  
- Jest : outil de base pour les tests unitaires  
  - après avoir écrit des tests on exécute une seule fois au lancement de l'application la commande : `npm run test`  
  - commande pour savoir si notre application est bien couverte (testée) : `npm test -- --coverage`  
Cette commande permet aussi de savoir dans quel fichier et sur quelle ligne un test est manquant
- React Testing Library : pour tester nos composants
- Bibliothèque recommandée pour les tests end-to-end : Cypress  
</br>
Note : la meilleure façon de tester un hook est de tester un composant qui utilise ce hook

## Exemples de code
- useContext et useState : [context.jsx](/src/utils/context/context.jsx)
- useParams et useNavigate : [Survey.jsx](/src/pages/Survey/Survey.jsx)
- hook personnalisé et useEffect : [hooks.jsx](/src/utils/hooks/hooks.jsx)
- PropTypes : [Card.jsx](/src/components/Card/Card.jsx)
- Styled components : [Survey.jsx](/src/pages/Survey/Survey.jsx) et [button.jsx](/src/styles/button.jsx)
- Link : [Header.jsx](/src/components/Header/Header.jsx) 
- routing des pages : [index.jsx](/src/index.jsx)
- composant de type classe et non fonction : [Card2.jsx](/src/components/Card/Card2.jsx)
- test : [Results.test.js](/src/pages/Results/Results.test.js)

## Définitions
- composant : fonction qui retourne un élément React  
Les composants permettent de découper toute l'interface utilisateur en éléments réutilisables (ex : header, footer, accueil, contact, ...)
- prop :  propriété que l'on peut récupérer dans les paramètres d'un composant
- hook : permet de créer du code réutilisable dans tous nos composants

[imgSize]: 1000

<details>
  <summary><h2>Images du site Web</h2></summary>
  
  ### <ins>Accueil</ins>
  <img src="/public/images/readme/home.png" alt="home" width=[imgSize]/>
  
  ### <ins>Profiles</ins>
  <img src="/public/images/readme/profiles.png" alt="home" width=[imgSize]/>
  
  ### <ins>Profile</ins>
  <img src="/public/images/readme/profil.png" alt="home" width=[imgSize]/>
  
  ### <ins>Questionnaire</ins>
  <img src="/public/images/readme/survey.png" alt="home" width=[imgSize]/>
  
  ### <ins>Résultats du questionnaire</ins>
  <img src="/public/images/readme/results.png" alt="home" width=[imgSize]/>
  
  ### <ins>Erreur 404</ins>
  <img src="/public/images/readme/404_error.png" alt="home" width=[imgSize]/>
  
  ### <ins>Site en mode sombre</ins>
  <img src="/public/images/readme/dark_mode.png" alt="home" width=[imgSize]/>
</details>
