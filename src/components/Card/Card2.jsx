/* 
 * exemple avec un composant de type classe (méthode dépréciée) au lieu d'un composant de type fonction 
 * on appprend cette ancienne façon de coder au cas ou on serait ammené à l'a rencontrer sur d'anciens projets
*/

import {Component} from 'react'
import '../../styles/Card.css';

class Card extends Component {
    /*
    * constructor : permet de donner accès aux props et aux states
    * note : le constructor n'est pas obligatoire
    */
    constructor(props) {
        super(props)
        this.state = {
            isFavorite: false
        }
    }
    
    setIsFavorite = () => {
        this.setState({isFavorite: !this.state.isFavorite}) 
    }
    
    render() {
        const {label, picture, title} = this.props
        const star = this.state.isFavorite ? '⭐' : ''
        
        return (
            <div className="col-8 col-md-4 m-4 h5 wrapper" onClick={this.setIsFavorite}>
                <div className="colored-text mb-4">{label}</div>
                <div className="mb-4 text-center"><img src={picture} alt="freelance"/></div>
                <div className="text-center align-text-bottom fw-bold title-card">{star} {title} {star}</div>
            </div> 
        )
    }
}

export default Card