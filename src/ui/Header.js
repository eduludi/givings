import React from 'react'
import PropTypes from 'prop-types'

function Header({ title, subtitle, description, ...props }) {
  return (
    <div className="bg-white px-4 py-6 min text-center">
      <h1 className="text-xl font-semibold mb-1">{title}</h1>
      <h2 className="text-xs text-gray-500 leading-tight tracking-wide">
        {subtitle}
      </h2>
      {description && (
        <p className="text-sm text-gray-700 mt-4 leading-tight">
          {description}
        </p>
      )}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
}
Header.defaultProps = {}

export default Header
