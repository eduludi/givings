import React from 'react'
import PropTypes from 'prop-types'

import { ConditionalLink } from '../utils/Link'

function Section({ title, more, children, rounded, to }) {
  return (
    <div className="mt-4 mb-6">
      <div className="flex justify-between px-4 py-2 text-xs">
        {title && <h3 className="text-gray-600 uppercase">{title}</h3>}
        {more && to && (
          <ConditionalLink to={to} className="text-blue-600 uppercase">
            {more}
          </ConditionalLink>
        )}
      </div>
      <div className={`bg-white ${rounded ? 'rounded overflow-hidden' : ''}`}>
        {children}
      </div>
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  more: PropTypes.string,
  children: PropTypes.node,
  rounded: PropTypes.bool,
  to: PropTypes.string,
}

export default Section
