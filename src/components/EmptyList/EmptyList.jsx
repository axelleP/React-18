import { useState } from 'react'
import EmptyIllustration from '../../assets/empty.svg'

function EmptyList() {
    return (
        <div className="row p-5 bg-grey justify-content-center text-center">
            <h1 className="fw-bold">Dommage...</h1>
            <img className="w-50 mb-4" src={EmptyIllustration} alt="Aucun résultat"/>
            <h3 className="fw-bold">Il semblerait que vous n’ayez besoin d’aucune compétence</h3>
        </div>
    )
}

export default EmptyList