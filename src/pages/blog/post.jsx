import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../../components/Layout'
import { Header, Loader } from 'semantic-ui-react'
import fetch from 'isomorphic-fetch'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      label: '',
      content: {
        text: ''
      }
    }
    this.getPostContent = this.getPostContent.bind(this)
    this.getPostContent(props)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      Object.assign({}, this.state, {
        loading: true
      })
    )
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
      loading: false,
      label: post.label,
      content: post.content
    })
  }
  render() {
    const loader = () => {
      return <Loader active inline="centered" />
    }
    const content = () => {
      return (
        <React.Fragment>
          <Header as="h1">
            Post page {this.state.label}
            <Header.Subheader>Next js demo Post page</Header.Subheader>
          </Header>
          <div>{this.state.content.text}</div>
        </React.Fragment>
      )
    }
    return (
      <Layout page={this.constructor.name}>
        {this.state.loading ? loader() : content()}
      </Layout>
    )
  }
}

export default withRouter(Post)
