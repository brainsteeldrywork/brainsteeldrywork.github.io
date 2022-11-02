import React from "react";

import logo from "../images/logo brain.jpeg"
import Phone from "../images/Icons/telefone.png"

import "../styles/headerStyles.css"


function Header() {
    return (
        <>
            <div className="headerTop">
                <p>Marcas Parceiras</p>

                <div className="divIcons">
                    <img src={Phone} alt="Icone Telefone" />
                    <p>(11) 9 0000-3333</p>
                </div>

                <p className="Patologias" >Corrigimos Patologias</p>
            </div>
            <header>
                <img src={logo} alt="Logo Brain Steel" className="logoBrain" />
                <h3>Aqui Voce Encontra Qualidade e Compromisso!</h3>
            </header>
        </>
    )
}
export default Header;