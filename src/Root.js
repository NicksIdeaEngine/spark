import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import MainStyles from './styles/MainStyles'

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 55em;
`

const Root = ({ children }) => (
  <>
    <GlobalStyles />
    <PageContainer className="page">
      <MainStyles>{children}</MainStyles>
    </PageContainer>
  </>
)

Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root
