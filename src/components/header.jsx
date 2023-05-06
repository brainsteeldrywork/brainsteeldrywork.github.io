import { React, useEffect, useState, useRef } from "react";

import Phone from "../images/Icons/telefone.png"
import Mail from "../images/Icons/mail.png"
import Insta from "../images/Icons/instagram.png"
import { motion } from "framer-motion"
import image1 from "../images/estruturas/Esqueleto.jpeg"
import image2 from "../images/estruturas/Interna.jpeg"
import image3 from "../images/estruturas/fachada.jpg"
import image4 from "../images/estruturas/fachada2.jpg"

import "../styles/headerStyles.css"

const carrossel = [image1, image2, image3, image4];


function Header() {


    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [width])


    const [check, setCheck] = useState(false);

    function menuDisplay() {

        setCheck(!check)
    }


    return (
        <>
            <div className="contatoHeader">

                <div style={{ display: "flex" }}>

                    <div className="divIcons">
                        <a href="mailto:contato@brainsteel.com.br"><img src={Mail} alt="Icone E-Mail" /></a>
                    </div>

                    <div className="divIcons">
                        <a href="https://www.instagram.com/brainsteel_oficial" rel="noreferrer" target="_blank" ><img src={Insta} alt="Icone Insta" /></a>
                    </div>

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
                    <h3 style={{
                        background: "black",
                        color: "#00B0FF",
                        padding: "10px",
                        borderRadius: "15px"
                    }}
                    >Consultoria Especializada</h3>
                </div>

            </div >

            <header>
                <ul style={{ display: check ? "block" : "none" }}>

                    <li onClick={menuDisplay}> <a href="/home/solucoes">Solucoes</a></li>
                    <li onClick={menuDisplay}> <a href="/home/sobre-nos">Sobre Nos</a></li>
                    <li onClick={menuDisplay}> <a href="#contato">Contato</a></li>

                    <li>Servicos</li>
                </ul>
                <h3>Correcao de Patologias!</h3>
                <h3>Aqui Voce Encontra Qualidade e Compromisso!</h3>
                <div className="Carrossel">

                    <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                        <motion.div className="inner"


                            drag="x"
                            animate={{ x: - width-20 }}
                            transition={{
                                ease: "circIn",
                                duration: 1,
                                x: { duration: 20 },
                                delay: 2
                            }}
                            dragConstraints={{ right: 0, left: -width }}
                        >

                            {carrossel.map(image => (
                                <motion.div className="item" key={image}>
                                    <img src={image} alt="Frames" />
                                </motion.div>
                            ))}

                        </motion.div>
                    </motion.div>
                </div>
            </header>
        </>
    )
}
export default Header;