import React from 'react'
import PropTypes from 'prop-types'

import NavButton from './NavButton'

function NavFooter({ items }) {
  return (
    <div className="bg-white flex justify-center border-t border-gray-200 flex-shrink-0 fixed bottom-0 right-0 left-0">
      {items.map(({ name, ...item }, key) => (
        <NavButton {...item} key={`nav-footer-item-${key}`} />
      ))}
    </div>
  )
}

NavFooter.propTypes = {
  items: PropTypes.array,
}
NavFooter.defaultProps = {
  items: [],
}

export default NavFooter
