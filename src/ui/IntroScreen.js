import React from 'react'
import PropTypes from 'prop-types'

// import StatusBar from './StatusBar'

function IntroScreen({ children }) {
  return (
    <div
      className="flex flex-col justify-center h-screen bg-cover bg-blue-600"
      style={{ backgroundImage: 'url(images/bg-start.png)' }}
    >
      {/* <StatusBar battery="three-quarters" carrier="SenzNet" /> */}
      <div className="flex flex-col flex-grow justify-center overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

IntroScreen.propTypes = {
  children: PropTypes.node,
}
export default IntroScreen
