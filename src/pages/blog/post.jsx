import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../../components/Layout'
import { Header } from 'semantic-ui-react'

class Post extends React.Component {
  render() {
    return (
      <Layout page={this.constructor.name}>
        <Header as="h1">
          Post page {this.props.router.query.slug}
          <Header.Subheader>Next js demo Post page</Header.Subheader>
        </Header>
      </Layout>
    )
  }
}

export default withRouter(Post)
