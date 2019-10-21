import React from 'react'

import Button from '../ui/Button'
import Image from '../ui/Image'
import IntroScreen from '../ui/IntroScreen'
import Wrapper from '../ui/Wrapper'
import Link from '../utils/Link'

function Welcome() {
  return (
    <IntroScreen>
      <Wrapper vertical className="items-center px-6 pb-10 p-0">
        <Image name="applogo/white" />
        <p className="text-white px-12 pt-4 text-center">
          The donations app for your church projects.
        </p>
      </Wrapper>
      <Wrapper vertical>
        <Button label="Donate" icon="donate" to="/pick-church" />
        <Button
          label="Login"
          icon="lock"
          type="hollow"
          to="/login"
          className="mt-4"
        />
        <Button
          label="Scan CODE"
          icon="qrcode"
          type="hollow"
          to="/scan-qr"
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
