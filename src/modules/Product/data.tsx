import React from "react"
import Formatagram from "./Formatagram"
import DiseaseTracker from "./DiseaseTracker"
import { ReactComponent as FormatagramSVG } from "resources/imgs/formatagram.svg"
import { ReactComponent as CoronavirusSVG } from "resources/imgs/coronavirus.svg"
import { Product } from "./interfaces"

const products: Product[] = [
  {
    logo: <FormatagramSVG />,
    title: "Formatagram",
    version: "Versão 1.2.1 • 04 de Março de 2020",
    technology: "Desenvolvido em Flutter",
    linkApple: "https://apps.apple.com/br/app/formatagram/id1500141159",
    linkGoogle:
      "https://play.google.com/store/apps/details?id=app.tuntz.formatagram",
    data: Formatagram,
  },
  {
    logo: <CoronavirusSVG />,
    title: "Coronavirus",
    subtitle: "Real-time Tracker",
    version: "Versão 1.0 • 05 de Março de 2020",
    technology: "Desenvolvido em Flutter",
    linkApple: "",
    linkGoogle: "",
    data: DiseaseTracker,
  },
]

export default products
