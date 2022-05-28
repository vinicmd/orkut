import { useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import { combineTheme, light, dark } from './styles'
import { Home } from './pages/Home'

export function Root() {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light))

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme(combineTheme(dark))
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}
