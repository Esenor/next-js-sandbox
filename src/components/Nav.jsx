import React from 'react'
import MenuItem from './MenuItem'
import { withRouter } from 'next/router'
import { Menu, Image } from 'semantic-ui-react'
import fetch from 'isomorphic-fetch'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      menu: [],
      logo: 'http://localhost:3042/images/logo.png'
    }
    this.getMenuTaxonomy = this.getMenuTaxonomy.bind(this)
    this.getMenuTaxonomy()
  }

  async getMenuTaxonomy() {
    console.log('fetching api http://localhost:3042/api/v1/menu-taxonomy')
    let response = await fetch('http://localhost:3042/api/v1/menu-taxonomy', {
      method: 'GET'
    })
    let menu = await response.json()
    this.setState(
      Object.assign({}, this.state, {
        menu: menu.sort((a, b) => {
          if (a.weight < b.weight) {
            return -1
          } else if (a.weight > b.weight) {
            return 1
          } else {
            return 0
          }
        })
      })
    )
  }

  render() {
    const isActive = item => {
      if (item.params.slug) {
        return (
          this.props.router.route === item.template &&
          this.props.router.query.slug === item.params.slug
        )
      } else {
        return this.props.router.route === item.template
      }
    }
    const buildMenu = () => {
      return this.state.menu.map((item, index) => {
        return (
          <MenuItem
            key={index}
            name={item.name}
            active={isActive(item)}
            to={item.to}
            label={item.label}
            params={item.params}
          />
        )
      })
    }
    return (
      <React.Fragment>
        <header className="efc-header">
          <Menu pointing secondary>
            {this.state.logo !== '' ? (
              <Image
                src={this.state.logo}
                width="50"
                height="50"
                circular
              />
            ) : null}
            {buildMenu()}
          </Menu>
        </header>
      </React.Fragment>
    )
  }
}

export default withRouter(Nav)
