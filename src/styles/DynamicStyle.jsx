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
    //var accessible car DynamicStyle est dans les balises ThemeProvider dans index.jsx
    const { theme } = useContext(ThemeContext)
    
    //retourne le CSS global StyledDynamicStyle selon la prop isDarkMode (dépend de theme)
    return <StyledDynamicStyle isDarkMode={theme === 'dark'} />
}

export default DynamicStyle