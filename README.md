# <h1 align="center">👨‍💻Training React 18👩‍💻</h1>

</br></br>

Learn React 18 by following the openclassrooms tutorial : [Créez une application React complète](https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete/7254167-tirez-le-maximum-de-ce-cours)

[Go to Website images](#website-images)

</br>

<u>I used :</u>
- react 18.0.0
- react-router-dom 6.3.0 : manages page routing. Ex. hooks : BrowserRouter, Routes, Route, Link, useParams
- react-scripts: ^5.0.1
- react-bootstrap: ^2.3.0
- msw: ^0.41.0 : Mock Service Worker. The mook intercepts API calls made by components during tests
- styled-components: ^5.3.5 : CSS in a JS component. Useful for the CSS under condition

## Notions :
- hook useContext, useParams, useNavigate :  
*useContext : allows to access a parent property (prop) directly from the child instead of passing it to other parents of this child
- we use the character \` en jsx to concatenate a string and a variable
</br>Ex : `<Link to={`\``/survey/${next}`\``}>Suivant</Link>`
- JS :  
*fetch : native method for making API calls (alternative : axios for ex.)
- CSS :  
*use variable  
Ex :  
`:root { --purple-color: #5843e4; }`  
`.link:hover { color: var(--purple-color); }`

## Tools
### Extension :
- ESLint : indicates errors in the code from the text editor
- React Developer Tools for Chrome

### Libraries :
- Prettier : formats the code
- PropTypes : allows to type the variables, set a default value, make a value mandatory

### Tests :  
Note : The best way to test a hook is to test a component that uses that hook.
- Jest : basic tool for unit testing. Write the test and run the command : `npm run test`  
Order to know how well our app is covered (tested) : `npm test -- --coverage`  
This command allows you to know in which file and on which line a test is missing
- React Testing Library : for testing our components
- recommended library : Cypress


[imgSize]: 1000

<details>
  <summary><h2>Website images</h2></summary>
  
  ### <ins>Home</ins>
  <img src="/public/images/readme/home.png" alt="home" width=[imgSize]/>
  
  ### <ins>Profiles</ins>
  <img src="/public/images/readme/profiles.png" alt="home" width=[imgSize]/>
  
  ### <ins>Survey</ins>
  <img src="/public/images/readme/survey.png" alt="home" width=[imgSize]/>
  
  ### <ins>Survey results</ins>
  <img src="/public/images/readme/results.png" alt="home" width=[imgSize]/>
  
  ### <ins>404 Error</ins>
  <img src="/public/images/readme/404_error.png" alt="home" width=[imgSize]/>
  
  ### <ins>Dark mode</ins>
  <img src="/public/images/readme/dark_mode.png" alt="home" width=[imgSize]/>
</details>
