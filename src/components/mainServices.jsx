import React from "react";

import "../styles/mainStyles.css";

import Brasilit from "../images/LogoMarcas/Brasilit_.jpg"
import Ecophon from "../images/LogoMarcas/Ecophon.png"
import Isover from "../images/LogoMarcas/Isover.png"
import Owa from "../images/LogoMarcas/owa.png"
import Placo from "../images/LogoMarcas/Placo.jpg"
import Quartzolit from "../images/LogoMarcas/Quartzolit.png"
import Sonex from "../images/LogoMarcas/Sonex.png"


function Main() {

    return (
        <>
            <div className="main">
                <h1>Servicos</h1>

                <p>sabemos como e dificil iniciar um projeto do zero, realizar uma alteracao na estrutura

                    escolher a empresa certa para a sua necessidade, e principalmente acertar a quantidade de materiais para evitar desperdicio.
                </p>

                <div className="logoImgs">

                    <div>
                        <img src={Brasilit} alt="Logo Brasilit" />
                    </div>
                    <div>
                        <img src={Ecophon} alt="Logo Ecophon" />
                    </div>
                    <div>
                        <img src={Isover} alt="Logo Isover" />
                    </div>
                    <div>
                        <img src={Owa} alt="Logo Owa" />
                    </div>
                    <div>
                        <img src={Placo} alt="Logo Placo" />
                    </div>
                    <div>
                        <img src={Quartzolit} alt="Logo Quartzolit" />
                    </div>
                    <div>
                        <img src={Sonex} alt="Logo Sonex" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;