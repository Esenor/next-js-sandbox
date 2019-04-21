import React from 'react'
import MenuItem from './MenuItem'
import { withRouter } from 'next/router'
import { Menu } from 'semantic-ui-react'

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
          {/*  */}
          <MenuItem
            name="Index"
            active={this.props.router.route === '/'}
            to="home_page"
            label="Index"
          />
          {/*  */}
          <MenuItem
            name="About"
            active={this.props.router.route === '/about'}
            to="about_page"
            label="About"
          />
          {/*  */}
          <MenuItem
            name="Form"
            active={this.props.router.route === '/form'}
            to="form_page"
            label="Form"
          />
          {/*  */}
          <MenuItem
            name="article azerty"
            active={
              this.props.router.route === '/blog/post' &&
              this.props.router.query.slug === 'azerty'
            }
            to="blog_post"
            params={{ slug: 'azerty' }}
            label="Article sur AZERTY"
          />
          {/*  */}
          <MenuItem
            name="article qwerty"
            active={
              this.props.router.route === '/blog/post' &&
              this.props.router.query.slug === 'qwerty'
            }
            to="blog_post"
            params={{ slug: 'qwerty' }}
            label="Article sur QWERTY"
          />
          {/*  */}
        </Menu>
      </React.Fragment>
    )
  }
}

export default withRouter(Nav)
