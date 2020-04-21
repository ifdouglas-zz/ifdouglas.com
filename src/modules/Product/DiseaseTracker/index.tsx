import React from "react"
import { ReactComponent as CoronavirusSlide1SVG } from "resources/imgs/coronavirus-slide1.svg"
import { ReactComponent as CoronavirusSlide2SVG } from "resources/imgs/coronavirus-slide2.svg"
import { ReactComponent as CoronavirusSlide3SVG } from "resources/imgs/coronavirus-slide3.svg"
import { Slide } from "../interfaces"

const slides: Slide[] = [
  {
    image: <CoronavirusSlide1SVG />,
    title: "Escanear proximidades",
    description:
      "Descubra o caso de Coronavirus mais perto de você e previna-se.",
  },
  {
    image: <CoronavirusSlide2SVG />,
    title: "Proliferação do vírus",
    description:
      "Utilizando os poderes do Google Maps é possível mostrar a proliferação do vírus ao redor do mundo.",
  },
  {
    image: <CoronavirusSlide3SVG />,
    title: "Combate e prevenção",
    description:
      "Fornecendo dados para rastreamento em tempo real, ajudando equipes de saúde.",
  },
]

export default slides
