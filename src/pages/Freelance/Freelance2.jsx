//CODE NON TESTÉ MAIS LAISSÉ EN EXEMPLE
//la version 18 de react ne permet pas de tester certaines anciennes fonctionnalités pour les composants classe

import { Component } from 'react'
import styled from 'styled-components'

const Availability = styled.div`
    &:before {
        position: absolute;
        left: 0;
        top: 4px;
        height: 10px;
        width: 10px;
        border-radius: 5px;
        background-color: ${({ available }) => (available ? 'green' : 'red')};
        content: '';
    }
    padding-left: 20px;
    position: relative;
`

class Freelance2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            freelanceData: {},
        }
    }
    
    componentDidMount() {
        const { id } = this.props.match.params//récupère l'id passé dans l'url

        fetch(`http://localhost:8000/freelance?id=${id}`)//appel API
        .then((response) => response.json())
        .then((jsonResponse) => {
            this.setState({ freelanceData: jsonResponse?.freelanceData })
        })
    }
  
    render() {
        const { freelanceData } = this.state.freelanceData
        const { id } = freelanceData
        
        return (
            <div className="row bg-grey align-items-center m-1 p-4">
                <div className="col"></div>
                <div className="col text-center">
                    <img className="rounded-pill" src={freelanceData && freelanceData.picture} alt={freelanceData && freelanceData.name} height={150} width={150} />{/* image */}
                </div>

                <div className="col">
                    <h1 className="h2 m-0">{freelanceData && freelanceData.name}</h1>{/* nom */}
                    <h2 className="h4 m-0">{freelanceData && freelanceData.job}</h2>{/* nom du poste */}
                    <span className="text-secondary">{freelanceData && freelanceData.location}</span>{/* localisation */}
                    <div className="row">{/* compétences */}
                    {freelanceData && freelanceData.skills &&
                        freelanceData.skills.map((skill) => (
                            <div className="col m-1 p-1 text-center border border-dark rounded" key={`skill-${skill}-${id}`}>{skill}</div>
                    ))}
                    </div>
                    <Availability available={freelanceData && freelanceData.available}>{freelanceData && freelanceData.available ? 'Disponible maintenant' : 'Indisponible'}</Availability>{/* disponibilité */}
                    <span className="fw-bold">{freelanceData && freelanceData.tjm} € / jour</span>{/* salaire / jour */}
                </div>
                <div className="col"></div>
            </div>
        )
    }
}

export default Freelance2