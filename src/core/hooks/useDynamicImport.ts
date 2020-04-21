import { useEffect, useState } from "react"

const useDynamicImport = (name: string): [string] => {
  const [uri, setUri] = useState("")

  useEffect(() => {
    let abort: () => void = null

    ;(async () => {
      const abortController = new Promise((resolve) => {
        abort = resolve
      })
      const svgData = await import(`resources/imgs/${name}.svg`)

      Promise.race([abortController, svgData])

      setUri(svgData?.default)
    })()

    return (): void => abort()
  }, [name, setUri])

  return [uri]
}

export default useDynamicImport
