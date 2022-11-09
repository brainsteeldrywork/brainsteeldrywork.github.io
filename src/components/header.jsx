import React from "react";

import logo from "../images/logo brain.jpeg"
import Phone from "../images/Icons/telefone.png"

import "../styles/headerStyles.css"
import { useState } from "react";





function Header() {

    const [check, setCheck] = useState(false);

    function menuDisplay() {

        setCheck(!check)
    }


    return (
        <>
            <div className="headerTop">

                <div className="menuResponsivo">


                    <input type="checkbox" id="checkbox-menu" onClick={menuDisplay} />
                    <label htmlFor="checkbox-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <ul style={{ opacity: check ? "1" : "0" }}>
                        <li>Solucoes</li>
                        <li>Sobre Nos</li>
                        <li>Contato</li>
                        <li>Servicos</li>
                    </ul>

                </div>

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