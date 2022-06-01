/* 
 * exemple avec un composant classe (méthode dépréciée) au lieu d'un composant fonction 
 * on appprend cette ancienne façon de coder au cas ou on serait ammené à l'a rencontrer sur d'anciens projets
*/

//les hooks ne sont pas accessibles pour les composants classe

//constructor : permet de donner accès aux props et aux states (non obligatoire)

/*
 * méthodes de cycle de vie :
 * componentDidMount() : appelé après le rendu du DOM
 * componentDidUpdate(prevProps, prevState) : appelé après une mise à jour des props ou du state
 * componentWillUnmount() : appelé quand le composant classe est retiré du DOM (ex: : display:none)
 */

import {Component} from 'react'
import '../../styles/Card.css';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        const {label, picture, title} = this.props
        
        return (
            <span>
                <div className="colored-text mb-4">{label}</div>
                <div className="mb-4 text-center"><img src={picture} alt="freelance"/></div>
                <div className="text-center align-text-bottom fw-bold title-card">{title}</div>
            </span> 
        )
    }
}

export default Card