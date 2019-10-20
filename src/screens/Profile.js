import React from 'react'

import Screen from '../ui/Screen'
import Header from '../ui/Header'
import Field from '../ui/Field'

const countries = [
  {
    label: 'Austria',
    value: 'at',
  },
  {
    label: 'France',
    value: 'fr',
  },
  {
    label: 'Germany',
    value: 'de',
  },
  {
    label: 'Italy',
    value: 'it',
  },
  {
    label: 'Portugal',
    value: 'pt',
  },
  {
    label: 'Romania',
    value: 'ro',
  },
  {
    label: 'Spain',
    value: 'es',
  },
  {
    label: 'Switzerland',
    value: 'ch',
  },
]

function Profile() {
  return (
    <Screen title="My profile">
      <Header
        title="Sascha Schuster"
        subtitle="sascha.schuster@stimme-der-hoffnung.de"
      />
      <Field
        label="E-mail"
        type="email"
        initialValue="sascha.schuster@stimme-der-hoffnung.de"
      />
      <Field label="Postal Code" initialValue="64665" />
      <Field label="City" initialValue="Alsbach-Hähnlein" />
      <Field
        label="Country"
        type="select"
        initialValue="de"
        options={countries}
      />
    </Screen>
  )
}

export default Profile
