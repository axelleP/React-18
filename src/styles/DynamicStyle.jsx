import { createGlobalStyle } from 'styled-components'//pour créer un style global
import { useContext } from 'react'
import { ThemeContext } from '../utils/context/context'

//on définit le style global
const StyledDynamicStyle = createGlobalStyle`
    body {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;

        background-color: ${({ isDarkMode }) =>
            isDarkMode ? '#2F2E41' : 'white'};
          
        color: ${({ isDarkMode }) =>
            isDarkMode ? 'white' : 'black'};
    }

    .bg-grey {
        background-color: ${({ isDarkMode }) =>
            isDarkMode ? '#444260' : '#F9F9FC'};
    }
`

function DynamicStyle() {
    /*
      récupère la state theme de ThemeContext
      cette state est accessible car DynamicStyle est dans la balise ThemeProvider dans index.jsx
    */
    const { theme } = useContext(ThemeContext)
    
    //retourne le CSS global StyledDynamicStyle selon la prop isDarkMode (dépend de la state theme)
    return <StyledDynamicStyle isDarkMode={theme === 'dark'} />
}

export default DynamicStyle