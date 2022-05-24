import Error404Illustration from '../../assets/404-illustration.png'

function Error() {
    return (
        <div className="row p-5 align-items-center text-center bg-grey fw-bold h3">
            <div className="mb-4">Oups...</div>
            <div><img className="w-50" src={Error404Illustration} alt="home"/></div>
            <div className="mt-4">Il semblerait qu'il y ait un problème.</div>
        </div>
    )
}

export default Error