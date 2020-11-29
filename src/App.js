import React from 'react'
import styled from 'styled-components'

import Doggo from './lib/Doggo'

import color from './assets/palettes/material.scss'
// import gruv from './assets/palettes/gruvbox-light.scss'

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 2em;
  width: 50em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2em solid ${color.blue500};
`

function App() {
  return (
    <AppContainer className="app-container">
      <div className="app-contents">
        <img src={Doggo('g').xlorg} alt="Doggo With Greyscale Filter" />
      </div>
    </AppContainer>
  )
}

export default App
