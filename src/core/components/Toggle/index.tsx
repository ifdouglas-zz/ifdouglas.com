import React from "react"
import { ReactComponent as MoonIcon } from "resources/imgs/moon.svg"
import { ReactComponent as SunIcon } from "resources/imgs/sun.svg"
import Styled from "./styled"

export interface Props {
  theme: string
  toggleTheme: Function
}

const Toggle = ({ theme, toggleTheme }: Props) => {
  const isLight = theme === "light"

  return (
    <Styled.Button lightTheme={isLight} onClick={() => toggleTheme()}>
      <SunIcon />
      <MoonIcon />
    </Styled.Button>
  )
}

export default Toggle
