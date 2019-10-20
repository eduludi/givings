import React from 'react'

import Button from '../ui/Button'
import Field from '../ui/Field'
import IntroScreen from '../ui/IntroScreen'
import Wrapper from '../ui/Wrapper'

function ForgotPassword() {
  return (
    <IntroScreen>
      <Wrapper vertical className="items-center py-2">
        <h1 className="text-white text-5xl">Forgot?</h1>
        <p className="text-white">We can solve it!</p>
      </Wrapper>
      <Wrapper vertical className="px-8">
        <Field placeholder="E-mail" rounded />
      </Wrapper>
      <Wrapper vertical className="px-8">
        <Button label="Recover my password" icon="key" to="/login" />
        <p className="text-white text-center p-4">
          or, if you don’t have an account
        </p>
        <Button label="Sign-up" icon="edit" to="/signup" type="hollow" />
      </Wrapper>
    </IntroScreen>
  )
}

export default ForgotPassword
