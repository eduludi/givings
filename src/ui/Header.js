import React from 'react'
import PropTypes from 'prop-types'

function Header({ title, subtitle, description, className }) {
  return (
    <div className={`bg-white px-4 py-6 min text-center ${className}`}>
      <h1 className="text-xl font-semibold mb-1">{title}</h1>
      <h2 className="text-xs text-gray-500 leading-tight tracking-wide">
        {subtitle}
      </h2>
      {description && (
        <div className="text-sm text-gray-700 mt-4 leading-tight">
          {description}
        </div>
      )}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.node,
  description: PropTypes.node,
}
Header.defaultProps = {}

export default Header
