import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    return <>
        <div className="navbar navbar-dark bg-dark mb-4 px-3">
            <span className="navbar-brand">
                Oscar Coronel
            </span>

            <button className="btn btn-outline-danger">
                <FontAwesomeIcon icon={ faRightFromBracket } />
                <span> Salir</span>
            </button>
        </div>   
    </>
}