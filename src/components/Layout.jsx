import '../styles/default.scss'
import React from 'react'
import Head from './Head'
import Nav from './Nav'
import { Container } from 'semantic-ui-react'

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head />
        <Nav pageSelected={this.props.page} />
        <Container>{this.props.children}</Container>
      </React.Fragment>
    )
  }
}

export default Layout
