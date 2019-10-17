import React from 'react'
import PropTypes from 'prop-types'

const modes = {
  solid: 's',
  light: 'l',
  regular: 'r',
}

function Icon({ mode, name, size }) {
  return (
    <i
      className={`fa${modes[mode]} fa-${name} ${size ? `fa-${size}` : ''}`}
    ></i>
  )
}

Icon.propTypes = {
  mode: PropTypes.oneOf(['solid', 'light', 'regular']),
  name: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '10x']),
}
Icon.defaultProps = {
  name: 'user',
  mode: 'light',
}

export default Icon
