import React from 'react'
import PropTypes from 'prop-types'

import { innerPages } from '../config/pages'
import NavHeader from './NavHeader'
import NavFooter from './NavFooter'

function Screen({ backTo, children, hideFooter, showBack, title }) {
  return (
    <div
      className={`bg-gray-200 flex flex-col justify-between h-screen mt-20 ${
        hideFooter ? '' : 'mb-10'
      }`}
    >
      <NavHeader title={title} backTo={backTo} showBack={showBack} />
      <div className="flex flex-col flex-grow justify-start overflow-y-auto">
        {children}
      </div>
      {!hideFooter && (
        <NavFooter items={innerPages.filter(({ inMenu }) => Boolean(inMenu))} />
      )}
    </div>
  )
}

Screen.propTypes = {
  backTo: PropTypes.string,
  children: PropTypes.node,
  showBack: PropTypes.bool,
  hideFooter: PropTypes.bool,
}

export default Screen
