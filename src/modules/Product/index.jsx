import React from 'react'
import Card from 'core/components/Card'
import CardHeader from 'core/components/Card/Header'
import CardBody from 'core/components/Card/Body'
import CardFooter from 'core/components/Card/Footer'
import ButtonApple from 'core/components/Button/Apple'
import ButtonGoogle from 'core/components/Button/Google'
import Slider from 'core/components/Slider'
import SliderItem from 'core/components/Slider/Item'
import Formatagram from './Formatagram'
import { ReactComponent as FormatagramSVG } from 'core/assets/imgs/formatagram.svg'
import Styled from './styled'

const Product = () => {

  const products = [
    {
      logo: <FormatagramSVG />,
      title: "Formatagram",
      version: "Versão 1.2 • 28 de Fevereiro de 2020",
      linkApple: "https://apps.apple.com/br/app/formatagram/id1500141159",
      linkGoogle: "https://play.google.com/store/apps/details?id=app.tuntz.formatagram",
      data: Formatagram,
    }
  ]

  const renderHeader = ({ logo, title, slogan, version }) => (
    <CardHeader
      logo={logo}
      title={title}
      version={version}
      slogan={slogan}
    />
  )

  const renderBody = ({ data }) => (
    <CardBody>
      <Slider>
        { data.map(({ image, title, description }) => (
          <SliderItem
            key={title}
            image={image}
            title={title}
            description={description}
          />
        )) }
      </Slider>
    </CardBody>
  )

  const renderFooter = ({ linkApple, linkGoogle }) => (
    <CardFooter>
      <ButtonApple url={linkApple} />
      <ButtonGoogle url={linkGoogle} />
    </CardFooter>
  )

  const renderCard = (product) => (
    <Card
      key={product}
      header={renderHeader(product)}
      body={renderBody(product)}
      footer={renderFooter(product)}
    />
  )

  return (
    <Styled.Wrapper>
      { products.map(product => renderCard(product)) }
    </Styled.Wrapper>
  )
}

export default Product
