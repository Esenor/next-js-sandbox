import NextHead from 'next/head'
import React from 'react'

class Head extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NextHead>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </NextHead>
      </React.Fragment>
    )
  }
}

export default Head
