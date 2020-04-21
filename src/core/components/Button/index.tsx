import React from "react"
import ButtonApple, { Props as AppleProps } from "./Apple"
import ButtonGoogle, { Props as GoogleProps } from "./Google"
import ButtonDefault, { Props as DefaultProps } from "./Default"
import ButtonOutlined, { Props as OutlinedProps } from "./Outlined"

const Button = {
  Apple: (props: AppleProps) => <ButtonApple {...props} />,
  Google: (props: GoogleProps) => <ButtonGoogle {...props} />,
  Default: (props: DefaultProps) => <ButtonDefault {...props} />,
  Outlined: (props: OutlinedProps) => <ButtonOutlined {...props} />,
}

export default Button
