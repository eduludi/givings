import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'
import { ConditionalLink } from '../utils/Link'

function Item({ label, sublabel, value, to }) {
  return (
    <ConditionalLink to={to}>
      <div className="flex justify-between items-center p-4 border-solid border-gray-200 border-b">
        <div className="flex flex-col">
          {sublabel && <h5 className="text-sm text-gray-600">{sublabel}</h5>}
          <h4 className={sublabel ? 'text-xs' : ''}>{label}</h4>
        </div>
        <div className="flex items-baseline">
          <div className="font-bold">{value}</div>
          {to && (
            <div className="ml-3 text-gray-500">
              <Icon name="chevron-right" />
            </div>
          )}
        </div>
      </div>
    </ConditionalLink>
  )
}

Item.propTypes = {
  label: PropTypes.string,
  sublabel: PropTypes.string,
  value: PropTypes.node,
  to: PropTypes.string,
}

export default Item
