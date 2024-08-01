import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'




function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <Router />
      </HashRouter>
      <GlobalStyle />

    </ThemeProvider>
  )
}

export default App
