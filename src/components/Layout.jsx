import React from 'react'
import Head from './Head'
import Nav from './Nav'
import { Container } from 'semantic-ui-react'

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head />
        <Container>
          <Nav pageSelected={this.props.page} />
          {this.props.children}
        </Container>
      </React.Fragment>
    )
  }
}

export default Layout
