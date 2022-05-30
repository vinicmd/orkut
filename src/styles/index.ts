import { CustomTheme, DefaultTheme } from 'styled-components'
import { dark } from './dark'
import { light } from './light'

const defaultTheme = {
  icons: '#CCCCD2',
  pink: '#ED2590',
  blue: '#25CBFF',
  yelow: '#FFD02C',
  textGrey: '#888'
}

function combineTheme(theme: CustomTheme): DefaultTheme {
  const colors = {
    colors: {
      ...theme,
      ...defaultTheme
    }
  }
  console.log(colors)
  return colors
}

export { combineTheme, dark, light }
