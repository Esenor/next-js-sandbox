import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../../components/Layout'
import { Header } from 'semantic-ui-react'
import fetch from 'isomorphic-fetch'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      content: {
        text: ''
      }
    }
    this.getPostContent = this.getPostContent.bind(this)
    this.getPostContent(props)
  }

  componentWillReceiveProps(nextProps) {
    this.getPostContent(nextProps)
  }

  async getPostContent(props) {
    console.log(
      `fetching api http://localhost:3042/api/v1/post/${
        props.router.query.slug
      }`
    )
    let response = await fetch(
      `http://localhost:3042/api/v1/post/${props.router.query.slug}`,
      {
        method: 'GET'
      }
    )
    let post = await response.json()
    this.setState({
      label: post.label,
      content: post.content
    })
  }
  render() {
    return (
      <Layout page={this.constructor.name}>
        <Header as="h1">
          Post page {this.state.label}
          <Header.Subheader>Next js demo Post page</Header.Subheader>
        </Header>
        <div>{this.state.content.text}</div>
      </Layout>
    )
  }
}

export default withRouter(Post)
