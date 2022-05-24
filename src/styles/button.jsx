import styled from 'styled-components'//bibliothèque pour utiliser du CSS en JS
import colors from './colors'

//rque : c'est plus rapide et plus court de cette manière que de faire des fonctions JS pour changer le style
const Button = styled.button`
    border : solid 2px ${colors.darkBlueColor};
    transition: 300ms;
    background-color: ${(props) => props.isSelected ? (props.theme === 'light' ? colors.purpleColor : colors.darkBlueColor) : (props.theme === 'light' ? colors.darkBlueColor : '#444260')};
    color: ${(props) => props.isSelected ? (props.theme === 'light' ? 'white' : colors.purpleColor) : (props.theme === 'light' ? 'black' : 'white')};

    &:hover {
        border : solid 2px ${colors.purpleColor};
        color: ${(props) => props.isSelected ? (props.theme === 'light' ? 'white' : colors.purpleColor) : (props.theme === 'light' ? 'black' : 'white')};
    }
`

export default Button