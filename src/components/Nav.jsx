import React from 'react'
import MenuItem from './MenuItem'
import { withRouter } from 'next/router'
import { Menu } from 'semantic-ui-react'
import fetch from 'isomorphic-fetch'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      menu: []
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
    this.setState({
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
        <Menu>{buildMenu()}</Menu>
      </React.Fragment>
    )
  }
}

export default withRouter(Nav)
