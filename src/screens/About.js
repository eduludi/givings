import React from 'react'

import Header from '../ui/Header'
import Image from '../ui/Image'
import Screen from '../ui/Screen'
import Wrapper from '../ui/Wrapper'

function About() {
  return (
    <Screen title="About" hideFooter>
      <Wrapper vertical className="items-center px-6 pb-10 p-0">
        <Image name="applogo/blue" />
        <p className="text-gray-600">
          The donations app for your church projects.
        </p>
      </Wrapper>
      <Header
        title="Inter-European Division of the General Conference of the Seventh-day Adventist Church "
        subtitle={
          <span>
            Schosshaldenstrasse 17 3006,
            <br />
            Bern, Switzerland
          </span>
        }
        description={
          <div>
            <p className="mb-2">
              Phone:{' '}
              <a href="tel:+41313591515" className="text-blue-400">
                +41 31 359 15 15
              </a>{' '}
              / Fax +41 31 359 15 66
            </p>
            <p className="mb-2">
              Email:{' '}
              <a href="mailto:info@eud.adventist.org" className="text-blue-400">
                info@eud.adventist.org
              </a>
            </p>
            <p className="mb-2">
              Company no: CHE-231.329.276 Association according to Swiss Law;
              Registered within the Commercial Register of the Canton of Bern,
              Switzerland
            </p>
            <p>
              Responsable for content: <strong>Norbert Zens</strong>
            </p>
          </div>
        }
      />
    </Screen>
  )
}

export default About
