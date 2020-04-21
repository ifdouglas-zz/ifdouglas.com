import React from "react"
import Styled from "./styled"

export interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any
  children: string
}

const Text = ({ as, children }: Props) => (
  <Styled.Text as={as}>{children}</Styled.Text>
)

const TextComponent = {
  h1: (props: Props) => <Text as="h1" {...props} />,
  h2: (props: Props) => <Text as="h2" {...props} />,
  h3: (props: Props) => <Text as="h3" {...props} />,
  h4: (props: Props) => <Text as="h4" {...props} />,
  h5: (props: Props) => <Text as="h5" {...props} />,
  h6: (props: Props) => <Text as="h6" {...props} />,
}

export default TextComponent
