import React from 'react'
import Layout from '../components/Layout'
import { withRouter } from 'next/router'
import { Header } from 'semantic-ui-react'

class Error extends React.Component {
  render() {
    return (
      <Layout page={this.constructor.name}>
        <Header as="h1">
          Error page
          <Header.Subheader>Generic error page</Header.Subheader>
        </Header>
        <p>
          Error { this.props.router.query.code}
        </p>
      </Layout>
    )
  }
}

export default withRouter(Error)
