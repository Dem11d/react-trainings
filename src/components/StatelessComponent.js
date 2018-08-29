import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

export default function StateLessComponent ({ content }) {
  return (
    <Fragment>
      <p>Hello from stateless component</p>
      <p>content = {content}</p>
    </Fragment>
  )
}

StateLessComponent.propTypes = {
  content: PropTypes.number
}
