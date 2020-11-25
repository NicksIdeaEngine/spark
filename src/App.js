import React from 'react'
import styled from '@emotion/styled'

import color from './assets/palettes/material.scss'
// import gruv from './assets/palettes/gruvbox-light.scss'

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 2em;
  width: 50em;
  height: 35em;
  border: 0.2em solid ${color.blue500};
`

function App() {
  return (
    <AppContainer className="app-container">
      <div className="app-contents">placeholder</div>
    </AppContainer>
  )
}

export default App
