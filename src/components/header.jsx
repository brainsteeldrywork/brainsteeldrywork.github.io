import React from "react";

import Phone from "../images/Icons/telefone.png"
import Mail from "../images/Icons/mail.png"

import "../styles/headerStyles.css"
import { useState } from "react";



function Header() {

    const [check, setCheck] = useState(false);

    function menuDisplay() {

        setCheck(!check)
    }


    return (
        <>
            <div className="contatoHeader">

                <div className="divIcons">
                    <img src={Mail} alt="Icone E-Mail" />
                    <a href="mailto:contato@brainsteel.com.br">contato@brainsteel.com.br</a>
                </div>

                <div className="divIcons">
                    <img src={Phone} alt="Icone Telefone" />
                    <a href="https://api.whatsapp.com/send?phone=5511944903817">(11) 9 4490-3817</a>
                </div>
            </div>

            <div className="headerTop">


                <div className="menuResponsivo">


                    <input type="checkbox" id="checkbox-menu" onClick={menuDisplay} />
                    <label className="headerLabel" htmlFor="checkbox-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>



                </div>

                <div className="tradeMark">
                    <h1 className="brainSteel">Brain Steel</h1>
                    <p>Construcao Inteligente</p>
                </div>

                <div className="divIcons">
                    <h3>Sinônimo de Excelência</h3>
                </div>

            </div>

            <header>
                <ul style={{ display: check ? "block" : "none" }}>

                    <li onClick={menuDisplay}> <a href="/home/solucoes">Solucoes</a></li>
                    <li onClick={menuDisplay}> <a href="/home/sobre-nos">Sobre Nos</a></li>
                    <li onClick={menuDisplay}> <a href="#contato">Contato</a></li>

                    <li>Servicos</li>
                </ul>
                <h3>Aqui Voce Encontra Qualidade e Compromisso!</h3>
            </header>
        </>
    )
}
export default Header;