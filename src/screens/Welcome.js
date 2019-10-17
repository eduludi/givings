import React from 'react'

import Button from '../ui/Button'
import Image from '../ui/Image'
import IntroScreen from '../ui/IntroScreen'
import Wrapper from '../ui/Wrapper'

function Welcome({ ...props }) {
  return (
    <IntroScreen>
      <Wrapper vertical className="items-center px-6 pb-10 p-0">
        <Image src="/applogo/white.png" />
        <p className="text-white">
          The donations app for your church projects.
        </p>
      </Wrapper>
      <Wrapper vertical>
        <Button label="Donate" icon="donate" to="/donate" size="large" />
        <Button
          label="Login"
          icon="lock"
          type="hollow"
          to="/login"
          className="mt-8"
        />
        <Button
          label="Sign up"
          icon="edit"
          type="hollow"
          to="/signup"
          className="mt-4"
        />
      </Wrapper>
    </IntroScreen>
  )
}

export default Welcome
