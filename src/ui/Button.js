import React from 'react'
import PropTypes from 'prop-types'

import { ConditionalLink } from '../utils/Link'
import Icon from './Icon'

const typeClasses = {
  default: 'bg-white text-blue-600 border-none',
  primary: 'bg-blue-600 text-white border-blue-600',
  hollow: 'transparent text-white border-white',
  link: 'transparent text-white border-none',
}

const sizeClasses = {
  small: 'text-sm px-2 py-1',
  default: 'px-3 py-3',
  large: 'text-lg px-5 py-4',
}

function Button({ className, disabled, icon, label, onClick, size, type, to }) {
  return (
    <ConditionalLink
      to={to}
      className={`rounded-full text-center uppercase border border-solid outline-none m-1 ${
        sizeClasses[size]
      } ${
        disabled ? 'bg-gray-500 text-gray-300' : typeClasses[type]
      } ${className}`}
      onClick={onClick}
    >
      {icon && (
        <span className="mr-2 outline-none">
          <Icon name={icon} />
        </span>
      )}
      {label}
    </ConditionalLink>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  to: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'hollow', 'default', 'link']),
}
Button.defaultProps = {
  className: '',
  size: 'default',
  type: 'default',
}

export default Button
