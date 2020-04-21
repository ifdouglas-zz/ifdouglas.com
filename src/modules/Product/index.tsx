import React from "react"
import Card from "core/components/Card"
import CardHeader from "core/components/Card/Header"
import CardBody from "core/components/Card/Body"
import CardFooter from "core/components/Card/Footer"
import ButtonApple from "core/components/Button/Apple"
import ButtonGoogle from "core/components/Button/Google"
import Slider from "core/components/Slider"
import SliderItem from "core/components/Slider/Item"
import { ReactComponent as MeSVG } from "resources/imgs/me2.svg"
import products from "./data"
import { Product, Slide } from "./interfaces"
import Styled from "./styled"

const Products = () => {
  const renderHeader = (product: Product) => <CardHeader {...product} />

  const renderBody = ({ data }: Pick<Product, "data">) => (
    <CardBody>
      <Slider>
        {data.map(({ image, title, description }: Slide) => (
          <SliderItem
            key={title}
            image={image}
            title={title}
            description={description}
          />
        ))}
      </Slider>
    </CardBody>
  )

  const renderFooter = ({
    linkApple,
    linkGoogle,
  }: Pick<Product, "linkApple" | "linkGoogle">) => (
    <CardFooter>
      <ButtonApple url={linkApple} />
      <ButtonGoogle url={linkGoogle} />
    </CardFooter>
  )

  const renderCard = (product: Product) => (
    <Card key={product.title}>
      {renderHeader(product)}
      {renderBody(product)}
      {renderFooter(product)}
    </Card>
  )

  return (
    <Styled.Article>
      <Styled.Animation>
        <MeSVG />
      </Styled.Animation>
      {products.map((product) => renderCard(product))}
      {/* <Styled.Me>
        <MeSVG />
      </Styled.Me> */}
    </Styled.Article>
  )
}

export default Products
