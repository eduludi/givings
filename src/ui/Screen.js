import React from 'react'
import PropTypes from 'prop-types'

import { innerPages } from '../config/pages'
import NavHeader from './NavHeader'
import NavFooter from './NavFooter'

function Screen({ children, backTo, showBack, title }) {
  return (
    <div className="bg-gray-200 flex flex-col  justify-between h-screen">
      <NavHeader title={title} backTo={backTo} showBack={showBack} />
      <div className="flex flex-col flex-grow justify-start overflow-y-auto">
        {children}
      </div>
      <NavFooter items={innerPages.filter(({ inMenu }) => Boolean(inMenu))} />
    </div>
  )
}

Screen.propTypes = {
  children: PropTypes.node,
  backTo: PropTypes.string,
  showBack: PropTypes.bool,
}
export default Screen
