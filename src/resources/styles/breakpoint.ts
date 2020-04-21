const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`

export default {
  desktop: mediaQuery(922),
  tablet: mediaQuery(768),
  phone: mediaQuery(576),
}
