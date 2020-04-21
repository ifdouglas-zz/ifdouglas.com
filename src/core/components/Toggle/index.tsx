import React from "react"
import { ReactComponent as MoonIcon } from "core/assets/imgs/moon.svg"
import { ReactComponent as SunIcon } from "core/assets/imgs/sun.svg"
import Styled from "./styled"

export interface Props {
  theme: string
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Toggle = ({ theme, toggleTheme }: Props) => {
  const isLight = theme === "light"

  return (
    <Styled.Button lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </Styled.Button>
  )
}

export default Toggle
