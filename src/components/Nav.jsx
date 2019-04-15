import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Menu } from 'semantic-ui-react'
import PostLink from './PostLink'

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item name="Index" active={this.props.pageSelected === 'Index'}>
            <Link href="/">Home Page</Link>
          </Menu.Item>
          <Menu.Item name="About" active={this.props.pageSelected === 'About'}>
            <Link href="/a-propos">About Page</Link>
          </Menu.Item>
          <Menu.Item name="Post" active={this.props.router.query.slug === 'post-1'}>
            <PostLink slug="post-1">post 1</PostLink>
          </Menu.Item>
          <Menu.Item name="Post" active={this.props.router.query.slug === 'post-toto'}>
            <PostLink slug="post-toto">post toto</PostLink>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    )
  }
}

export default withRouter(Nav)
