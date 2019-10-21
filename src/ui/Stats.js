import React from 'react'
import PropTypes from 'prop-types'

import Link from '../utils/Link'

function Stat({ count, label, highlighted, url }) {
  return (
    <Link to={url}>
      <div className="flex flex-col justify-around items-center">
        <div className={`text-xl ${highlighted ? 'text-blue-600' : ''}`}>
          {count}
        </div>
        <div className="text-xs text-gray-500">{label}</div>
      </div>
    </Link>
  )
}

Stats.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  highlighted: PropTypes.bool,
}

function Stats({ items }) {
  return (
    <div className="flex justify-around items-center bg-gray-100 border-t border-b p-4">
      {items.map((item, key) => (
        <Stat {...item} key={`stat-${key}`} />
      ))}
    </div>
  )
}

Stats.propTypes = {
  items: PropTypes.array,
}
Stats.defaultProps = {
  items: [],
}

export default Stats
