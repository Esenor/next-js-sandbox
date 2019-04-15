import React from 'react'
import Link from 'next/link'

class PostLink extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link as={`/article/${this.props.slug}`} href={`/article?slug=${this.props.slug}`}>
          {this.props.children}
        </Link>
      </React.Fragment>
    )
  }
}

export default PostLink
