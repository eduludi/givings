import React from 'react'
import PropTypes from 'prop-types'

import { useRouteMatch } from 'react-router-dom'

import { ConditionalLink } from '../utils/Link'
import Icon from './Icon'

function NavButton({ label, icon, url }) {
  const route = useRouteMatch()

  const active = route.url === url || route.url.match(url)

  return (
    <ConditionalLink to={url}>
      <button
        className={`flex flex-col justify-center items-center px-4 py-1 focus:outline-none ${
          active ? 'bg-blue-600 text-white' : 'text-gray-600'
        }`}
      >
        <span>
          <Icon name={icon} size="lg" mode={active ? 'solid' : 'light'} />
        </span>
        <small className="text-xs">{label}</small>
      </button>
    </ConditionalLink>
  )
}

NavButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
}

export default NavButton
