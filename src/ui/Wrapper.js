import React from 'react'
import PropTypes from 'prop-types'

function Wrapper({ children, vertical, className }) {
  return (
    <div className={`flex ${vertical ? 'flex-col' : ''} p-4 ${className}`}>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  vertical: PropTypes.bool,
}
Wrapper.defaultProps = {
  className: '',
  vertical: false,
}

export default Wrapper
