import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks/hooks'
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

function Freelance() {
    const { id } = useParams()//récupération de l'id passé dans l'url
    const { data, error } = useFetch(`http://localhost:8000/freelance?id=${id}`)
    const { freelanceData } = data//rappel : le nom de la var doit être le même que le nom renvoyé par l'API

    if (error) {
        return (
            <div className="row">
                <span className="col col-sm-2 col-md-3 col-lg-4"></span>
                <span className="col-12 col-sm-8 col-md-6 col-lg-4 d-flex justify-content-center alert alert-danger" role="alert">
                    <strong>Erreur!</strong>&nbsp; Oups il y a eu un problème.
                </span>
                <span className="col col-sm-2 col-md-3 col-lg-4"></span>
            </div>
        )
    }
    
    return (
        <span>
            {!freelanceData ? (
                <div className="mt-5 d-flex justify-content-center">{/* loader : îcone de chargement */}
                    <div className="spinner-border justify-content-center" role="status"></div>
                </div>
            ) : (
                <div className="row bg-grey align-items-center m-1 p-4">
                    <div className="col"></div>
                    <div className="col text-center">
                        <img className="rounded-pill" src={freelanceData.picture} alt={freelanceData.name} height={150} width={150} />{/* image */}
                    </div>

                    <div className="col">
                        <h1 className="h2 m-0">{freelanceData.name}</h1>{/* nom */}
                        <h2 className="h4 m-0">{freelanceData.job}</h2>{/* nom du poste */}
                        <span className="text-secondary">{freelanceData.location}</span>{/* localisation */}
                        <div className="row">{/* compétences */}
                        {freelanceData.skills.map((skill) => (
                                <div className="col m-1 p-1 text-center border border-dark rounded" key={`skill-${skill}-${id}`}>{skill}</div>
                        ))}
                        </div>
                        <Availability available={freelanceData.available}>{freelanceData.available ? 'Disponible maintenant' : 'Indisponible'}</Availability>{/* disponibilité */}
                        <span className="fw-bold">{freelanceData.tjm} € / jour</span>{/* salaire / jour */}
                    </div>
                    <div className="col"></div>
                </div>
            )}
        </span>
    )
}

export default Freelance;