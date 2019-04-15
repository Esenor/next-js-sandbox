import React from 'react'
import Layout from '../components/Layout'
import { Segment, Header } from 'semantic-ui-react'

class Index extends React.Component {
  render() {
    return (
      <Layout page={this.constructor.name}>
        <Header as="h1">
          Index page
          <Header.Subheader>Next js demo index page</Header.Subheader>
        </Header>
        <Segment>
          Nullam luctus venenatis fringilla. Duis in euismod massa. Vivamus id
          erat ac eros tristique imperdiet. Nam quis molestie lorem. Cras
          tristique dui dolor, quis pulvinar sapien pretium non. Duis posuere
          auctor imperdiet. Proin orci sapien, consectetur id felis sed,
          faucibus laoreet enim. Cras mollis tortor sem, eu venenatis elit
          elementum vel. Donec efficitur orci ut risus condimentum, ut
          scelerisque magna vehicula. Etiam mi nunc, suscipit nec urna a,
          facilisis pharetra lorem.
        </Segment>
      </Layout>
    )
  }
}

export default Index
