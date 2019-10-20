import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

const batteryPercentages = {
  full: 100,
  'three-quarters': 75,
  half: 50,
  quarter: 25,
  empty: 0,
}

function StatusBar({ battery, carrier }) {
  const time = new Date().toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className="flex justify-between items-center text-xs text-white py-1 px-2">
      <div className="w-1/3">
        <Icon name="signal" />
        <span className="px-1">{carrier}</span>
        <Icon name="wifi" />
      </div>
      <span className="w-1/3 flex justify-center text-">{time}</span>
      <span
        className={`w-1/3 flex justify-end items-center ${
          battery === 'empty' ? 'text-red-600' : ''
        }`}
      >
        <span className="pr-1">{`${batteryPercentages[battery]}%`}</span>
        <Icon name={`battery-${battery}`} />
      </span>
    </div>
  )
}

StatusBar.propTypes = {
  carrier: PropTypes.string,
  battery: PropTypes.oneOf([
    'full',
    'three-quarters',
    'half',
    'quarter',
    'empty',
  ]),
}
StatusBar.defaultProps = {
  carrier: 'HopeMedia',
  battery: 'full',
}

export default StatusBar
