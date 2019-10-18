import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

function ConditionalLink({ children, condition, to, ...rest }) {
  return to || condition ? (
    <Link to={to} {...rest}>
      {children}
    </Link>
  ) : (
    <div {...rest}>{children}</div>
  )
}

ConditionalLink.propTypes = {
  children: PropTypes.node,
  condition: PropTypes.bool,
  to: PropTypes.string,
}

export { ConditionalLink }
export default Link
