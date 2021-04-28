import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import linkedin_icon from '../../assets/icons/linkedin_icon.svg'
import github_icon from '../../assets/icons/github_icon.svg'
import arrow_icon from '../../assets/icons/arrow_icon.svg'

import "./Presentacion.css"

const Presentacion = () => {

    return (
        <header className="header">
            <div className="header__principal">
                <p className="header__saludoInicial header__saludoInicial--hola">¡Hola!</p>
                <p className="header__saludoInicial">Me llamo David</p>
                <p className="header__saludoInicialCopete">Soy desarrollador web, si querés un trabajo creativo
                                                        y con un código limpio, te invito a contactarme</p>
                                                    
                <button className="header__botonContacto">
                    <HashLink className="header__botonContactoLink" smooth to="/">Contacto</HashLink>
                </button>
                <HashLink className="header__scrollDownLink" smooth to="/">
                    <span className="header__scrollDown">scroll down</span>
                    <img className="header__flechaIcono" src={arrow_icon} alt="scroll down"></img>
                </HashLink>
            </div>
            <div className="header__profesional">
                <Link to="/">
                    <img className="header__profesionalIconos" src={github_icon} alt="github"></img>
                </Link>
                <Link to="/">
                    <img className="header__profesionalIconos" src={linkedin_icon} alt="linkedin"></img>
                </Link>
            </div>
        </header>
    )
}

export default Presentacion;