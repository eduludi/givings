import React from 'react'

import Button from '../ui/Button'
import Field from '../ui/Field'
import IntroScreen from '../ui/IntroScreen'
import Wrapper from '../ui/Wrapper'

function Signup() {
  return (
    <IntroScreen>
      <Wrapper vertical className="items-center py-2">
        <h1 className="text-white text-5xl">Sign-up</h1>
        <p className="text-white">It's good to have you here!</p>
      </Wrapper>
      <Wrapper vertical className="px-8">
        <Field placeholder="Name" rounded />
        <Field placeholder="E-mail" rounded />
        <Field placeholder="Password" rounded />
      </Wrapper>
      <Wrapper vertical className="px-8">
        <Button label="Sign-up" icon="edit" to="/pick-church" type="hollow" />
      </Wrapper>
    </IntroScreen>
  )
}

export default Signup
