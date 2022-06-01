import '../../styles/Card.css';

function Card({ label, title, picture }) {
    return (
        <span>
            <div className="colored-text mb-4">{label}</div>
            <div className="mb-4 text-center"><img src={picture} alt="freelance"/></div>
            <div className="text-center align-text-bottom fw-bold title-card">{title}</div>
        </span>
    )
}
 
export default Card