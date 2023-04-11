import React from "react";

import "../styles/mainStyles.css";

import Eletrica from "../images/Servicos/Quadro-de-distribuicao-1024x681.png"
import Cftv from "../images/Servicos/cftv.jpg"
import Drywall from "../images/Servicos/Drywall.jpg"

// import Brasilit from "../images/LogoMarcas/Brasilit_.jpg"
// import Ecophon from "../images/LogoMarcas/Ecophon.png"
// import Isover from "../images/LogoMarcas/Isover.png"
// import Owa from "../images/LogoMarcas/owa.png"
// import Placo from "../images/LogoMarcas/Placo.jpg"
// import Quartzolit from "../images/LogoMarcas/Quartzolit.png"
// import Sonex from "../images/LogoMarcas/Sonex.png"


function Main() {

    return (
        <>
            <div className="main">
                <h1>Servicos</h1>

                <div className="servicos">

                    <div>
                        <h2>Eletrica</h2>
                        <img src={Eletrica} alt="" />
                        <p></p>
                    </div>

                    <div>
                        <h2>Seguranca</h2>
                        <img src={Cftv} alt="" />
                        <p></p>
                    </div>

                    <div>
                        <h2>DryWall</h2>
                        <img src={Drywall} alt="" />
                        <p></p>
                    </div>

                    <div>
                        <h2>Hidraulica</h2>
                        <img src="" alt="" />
                        <p></p>
                    </div>

                    <div>
                        <h2>Pintura</h2>
                        <img src="" alt="" />
                        <p></p>
                    </div>

                </div>

                {/* <div className="logoImgs">

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
                </div> */}
            </div>
        </>
    )
}

export default Main;