import React from "react";

import "../styles/mainStyles.css";

import Eletrica from "../images/Servicos/Quadro-de-distribuicao-1024x681.png"
import Cftv from "../images/Servicos/cftv.jpg"
import Drywall from "../images/Servicos/Drywall.jpg"
import Hidraulica from "../images/Servicos/Hidraulica.jpg"
import Pintura from "../images/Servicos/Pintura.jpg"

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
                        <h2>Elétrica</h2>
                        <img src={Eletrica} alt="" />
                        <h4>Realizamos instalações elétricas em residências, empresas, e prédios. Instalação, troca, e reparo de diversos equipamentos elétricos. Se estiver tendo problemas técnicos em iluminação, tomadas, disjuntores, ou até mesmo se for necessário instalação de novos pontos, é este serviço que você precisa!</h4>
                    </div>

                    <div>
                        <h2>Seguranca</h2>
                        <img src={Cftv} alt="" />
                        <h4>Realizamos serviços de instalação e Manutencao em Sistema De Alarmes e CFTV – Circuito Fechado de TV, em câmeras de segurança. Se você necessita de maior segurança em sua residência ou empresa, solicite esse serviço.</h4>
                    </div>

                    <div>
                        <h2>DryWall</h2>
                        <img src={Drywall} alt="" />
                        <h4>Sistemas em Drywall; Light Steel Frame; Painel Wall; Master Board; Tratamento termo-acústico; Sistemas de revestimentos e forros em geral. Colaboradores treinados, visando atender com máxima excelência, não somente às expectativas da empresa, mas também de nossos clientes.</h4>
                    </div>

                    <div>
                        <h2>Hidraúlica</h2>
                        <img src={Hidraulica} alt="" />
                        <h4>Realizamos instalações e manutenções em encanamentos de diversos tipos. Se você está com um cano furado, vazando, ou até mesmo se necessita de um novo ponto de água, é esse serviço que você precisa!</h4>
                    </div>

                    <div>
                        <h2>Pintura</h2>
                        <img src={Pintura} alt="" />
                        <h4> Pinturas Residenciais, Prediais e Industriais.<br/> Textura Grafiato, Textura Marmorato, Textura Projetada, Preparação de superfície, Massa corrida, Massa acrílica, Pintura de fachada, Cimento queimado, Textura Arenito.</h4>
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