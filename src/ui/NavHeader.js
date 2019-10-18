import React from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import Button from './Button'
import Icon from './Icon'

function NavHeader({ className, title, backTo, showBack }) {
  const history = useHistory()

  return (
    <header
      className={`bg-blue-600 flex flex-col text-white h-20 flex-shrink-0 ${className}`}
    >
      <div className="flex justify-between items-center text-xs py-1 px-2">
        <div className="w-1/3">
          <Icon name="signal" />
          <span className="px-1">Carrier</span>
          <Icon name="wifi" />
        </div>
        <span className="w-1/3 flex justify-center">10:26</span>
        <span className="w-1/3 flex justify-end items-center">
          <span className="pr-1">100%</span>
          <Icon name="battery-full" />
        </span>
      </div>
      <div className="flex justify-between items-center p-2">
        <div className="w-1/5">
          {showBack && (
            <Button
              icon="arrow-left"
              onClick={
                backTo ? null : () => console.log('!!') || history.goBack()
              }
              type="link"
              size="small"
              to={backTo}
            />
          )}
        </div>
        <h1 className="w-3/5 text-lg text-center tracking-wide">{title}</h1>
        <div className="w-1/5"></div>
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
