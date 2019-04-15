import React from 'react'
import Layout from '../components/Layout'
import Placeholder from '../components/Placeholder'
import { Segment, Header } from 'semantic-ui-react'

class About extends React.Component {
  render() {
    return (
      <Layout page={this.constructor.name}>
        <Header as="h1">
          About page
          <Header.Subheader>Next js demo About page</Header.Subheader>
        </Header>
        <Segment>
          Aliquam erat volutpat. Mauris fermentum magna non vestibulum sagittis.
          Vestibulum nibh ipsum, blandit sit amet fermentum a, consequat vel
          odio. Cras fermentum tristique nunc non vulputate. In auctor vel nunc
          tincidunt cursus. Mauris gravida ornare felis, sit amet rhoncus enim
          auctor eu. Aenean egestas nunc vel turpis mollis aliquet quis ac eros.
          Nulla dapibus fermentum erat. In hac habitasse platea dictumst. Sed
          tempus quam est. Duis efficitur ullamcorper metus ut dignissim. In
          tincidunt, lorem id fringilla ultrices, neque mauris feugiat arcu, a
          pulvinar turpis arcu nec orci. Fusce nec velit volutpat, rhoncus metus
          sit amet, sagittis ex. Integer sed enim mauris.
        </Segment>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Layout>
    )
  }
}

export default About
