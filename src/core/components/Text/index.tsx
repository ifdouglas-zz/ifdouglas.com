import React, { ReactNode } from "react"
import Styled from "./styled"

export interface Props {
  as?: string
  type: string
  fontSize?: string
  children: string
}

const Text = ({ as, type, children }: Props) => (
  <Styled.Text as={as} type={type}>
    {children}
  </Styled.Text>
)

const TextComponent = {
  h1: (props: Props): ReactNode => <Text as="h1" {...props} />,
  h2: (props: Props): ReactNode => <Text as="h2" {...props} />,
  h3: (props: Props): ReactNode => <Text as="h3" {...props} />,
  h4: (props: Props): ReactNode => <Text as="h4" {...props} />,
  h5: (props: Props): ReactNode => <Text as="h5" {...props} />,
  h6: (props: Props): ReactNode => <Text as="h6" {...props} />,
}

export default TextComponent
