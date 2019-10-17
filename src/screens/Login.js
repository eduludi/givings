import React from 'react'

import Button from '../ui/Button'
import Field from '../ui/Field'
import IntroScreen from '../ui/IntroScreen'
import Wrapper from '../ui/Wrapper'

function Login({ ...props }) {
  return (
    <IntroScreen>
      <Wrapper vertical className="items-center py-2">
        <h1 className="text-white text-5xl">Login</h1>
        <p className="text-white">Welcome back!</p>
      </Wrapper>
      <Wrapper vertical className="px-8">
        <Field placeholder="E-mail" rounded />
        <Field placeholder="Password" rounded />
      </Wrapper>
      <Wrapper vertical className="px-8">
        <Button label="Login" icon="sign-in" to="/projects" />
        <p className="text-white text-center p-4">
          or, if you don’t have an account
        </p>
        <Button label="Sign-up" icon="edit" to="/signup" type="hollow" />

        <Button
          label="Forgot your password?"
          icon="key"
          to="/forgotPassword"
          type="link"
          className="mt-4"
        />
      </Wrapper>
    </IntroScreen>
  )
}

export default Login
