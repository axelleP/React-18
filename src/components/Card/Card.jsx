import { useState } from 'react'
import '../../styles/Card.css';

function Card({ label, title, picture }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const star = isFavorite ? '⭐' : ''
    
    return (
        <div className="col-8 col-md-4 m-4 h5 wrapper" onClick={() => setIsFavorite(!isFavorite)}>
            <div className="colored-text mb-4">{label}</div>
            <div className="mb-4 text-center"><img src={picture} alt="freelance"/></div>
            <div className="text-center align-text-bottom fw-bold title-card">{star} {title} {star}</div>
        </div>
    )
}
 
export default Card