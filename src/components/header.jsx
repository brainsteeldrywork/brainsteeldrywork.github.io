import React from "react";

import logo from "../images/LogoMarcas/logo-bs.png"
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
                    <label className="headerLabel" htmlFor="checkbox-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <ul style={{ opacity: check ? "1" : "0" }}>
                        
                        <li onClick={menuDisplay}> <a href="/home/solucoes">Solucoes</a></li>
                        <li onClick={menuDisplay}> <a href="/home/sobre-nos">Sobre Nos</a></li>
                        <li onClick={menuDisplay}> <a href="#contato">Contato</a></li>
                        
                        <li>Servicos</li>
                    </ul>

                </div>

                {/* <p className="Patologias" >Corrigimos Patologias</p> */}

                <img src={logo} alt="Logo Brain Steel" className="logoBrain" />

                <div className="divIcons">
                    <img src={Phone} alt="Icone Telefone" />
                    <p>(11) 9 0000-3333</p>
                </div>

            </div>
            <header>
                <h3>Aqui Voce Encontra Qualidade e Compromisso!</h3>
            </header>
        </>
    )
}
export default Header;