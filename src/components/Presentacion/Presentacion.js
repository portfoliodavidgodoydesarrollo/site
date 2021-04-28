import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import "./Presentacion.css"

const Presentacion = () => {

    return (
        <header className="header">
            <div className="header__principal">
                <p className="header__saludoInicial header__saludoInicial--hola">¡Hola!</p>
                <p className="header__saludoInicial">Me llamo David</p>
                <p className="header__saludoInicialCopete">Soy desarrollador web, si querés un trabajo creativo
                                                        y con un código limpio, te invito a contactarme</p>
                <button className="header__botonContacto">Contacto</button>
                <HashLink className="header__scrollDownLink" smooth to="/">
                    <span className="header__scrollDown">scroll down</span>
                    <img className="header__flechaIcono" src="#" alt="scroll down"></img>
                </HashLink>
            </div>
            <div className="header__profesional">
                <Link className="header__profesionalLink" to="/">
                    <img className="header__profesionalIconos" src="#" alt="github"></img>
                </Link>
                <Link className="header__profesionalLink" to="/">
                    <img className="header__profesionalIconos" src="#" alt="linkedin"></img>
                </Link>
            </div>
        </header>
    )
}

export default Presentacion;