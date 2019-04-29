import React from 'react'
import { Link } from '../routes'
import { withRouter } from 'next/router'
import { Menu } from 'semantic-ui-react'

class MenuItem extends React.Component {
  render() {
    return (
      <Menu.Item name={this.props.name} active={this.props.active}>
        <Link to={this.props.to} params={Object.assign({}, this.props.params)}>
          <a>{this.props.label}</a>
        </Link>
      </Menu.Item>
    )
  }
}

export default withRouter(MenuItem)
