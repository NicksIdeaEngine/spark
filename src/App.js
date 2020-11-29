import React from 'react'
import styled from 'styled-components'

import Doggo from './lib/doggo'

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid blue;
`

function App() {
  return (
    <AppContainer className="app-container">
      <div className="app-contents">
        <h1>Headline 1</h1>
        <img src={Doggo('g').xlorg} alt="Doggo With Greyscale Filter" />
      </div>
    </AppContainer>
  )
}

export default App
