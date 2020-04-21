import { ReactNode } from "react"

export interface Slide {
  image: ReactNode
  title: string
  description: string
}

export interface Product {
  logo: ReactNode
  title: string
  subtitle?: string
  version: string
  technology: string
  linkApple: string
  linkGoogle: string
  data: Slide[]
}
