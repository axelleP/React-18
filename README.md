<pre>
# Training React 2
    I used :
    - react 18.0.0
    - react-router-dom 6.3.0 : manages page routing. Ex. hooks : BrowserRouter, Routes, Route, Link, useParams
    - react-scripts: ^5.0.1
    - react-bootstrap: ^2.3.0
    - msw: ^0.41.0 : Mock Service Worker. The mook intercepts API calls made by components during tests
    - styled-components: ^5.3.5 : CSS in a JS component. Useful for the CSS under condition

    ## Notions
    - hook useContext, useParams, useNavigate :
    *useContext : allows to access a parent property (prop) directly from the child instead of passing it to other parents of this child
    - we use the character ` en jsx to concatenate a string and a variable. ex : <!-- <Link to={`/survey/${next}`}>Suivant</Link> -->
    - JS :
    *fetch : native method for making API calls (alternative : axios for ex.)
    - CSS : use variable
    Ex :
    :root {
      --purple-color: #5843e4;
    }

    .link:hover {
        color: var(--purple-color);
    }

    # Tools
    ## Extension
    - ESLint (not used for this project) : indicates errors in the code from the text editor
    - React Developer Tools for chrome (not used for this project)

    ## Libraries
    - Prettier (not used in this project) : formats the code
    - PropTypes (not used in this project) : allows to type the variables, set a default value, make a value mandatory

    Tests :
    Note : The best way to test a hook is to test a component that uses that hook.
    - Jest : basic tool for unit testing. Write the test and run the command : npm run test
    Order to know how well our app is covered (tested) : npm test -- --coverage
    This command allows you to know in which file and on which line a test is missing.
    - React Testing Library : for testing our components
    - recommended library : Cypress
</pre>
