import React from 'react'

import Button from '../ui/Button'
import Image from '../ui/Image'
import IntroScreen from '../ui/IntroScreen'
import Wrapper from '../ui/Wrapper'
import Link from '../utils/Link'

function Welcome({ ...props }) {
  return (
    <IntroScreen>
      <Wrapper vertical className="items-center px-6 pb-10 p-0">
        <Image name="applogo/white" />
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

      <Wrapper vertical className="items-center px-6 pt-10">
        <p className="text-white text-center text-sm leading-tight">
          <Link to="/about">
            <span className="block">
              &copy; 2019 Inter-European Division of the General Conference of
              the Seventh-day Adventist Church
            </span>
            <span className="block text-blue-200">Read more</span>
          </Link>
        </p>
      </Wrapper>
    </IntroScreen>
  )
}

export default Welcome
