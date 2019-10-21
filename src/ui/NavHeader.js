import React from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import Button from './Button'
// import StatusBar from './StatusBar'

function NavHeader({ className, title, backTo, showBack }) {
  const history = useHistory()

  return (
    <header
      className={`bg-blue-600 flex flex-col text-white flex-shrink-0 ${className}`}
    >
      <div className="flex justify-between items-center h-12">
        <div className="w-1/6 flex justify-start p-3">
          {showBack && (
            <Button
              icon="arrow-left"
              onClick={backTo ? null : history.goBack}
              type="link"
              size="small"
              to={backTo}
            />
          )}
        </div>
        <h1 className="w-4/6 text-lg text-center tracking-wide p-3">{title}</h1>
        <div className="w-1/6 flex justify-end p-3"></div>
      </div>
    </header>
  )
}

NavHeader.propTypes = {
  backTo: PropTypes.string,
  className: PropTypes.string,
  showBack: PropTypes.bool,
  title: PropTypes.string,
}
NavHeader.defaultProps = {
  className: '',
  showBack: true,
}

export default NavHeader
