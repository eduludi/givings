import React from 'react'

import Screen from '../ui/Screen'
import Header from '../ui/Header'
import Field from '../ui/Field'
import Section from '../ui/Section'
import Item from '../ui/Item'
import { range } from '../utils/array'

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

function rand(number) {
  return Math.floor(Math.random() * number) + 1
}

const donations = range(0, 10).map(i => ({
  date: `${rand(31)}/${rand(12)}/2019`,
  ammount: `${rand(250)}.${rand(99)}`,
}))

function Profile() {
  return (
    <Screen title="My profile">
      <Header title="Sascha Schuster" subtitle="Darmstadt International" />
      <Field
        label="E-mail"
        type="email"
        initialValue="sascha.schuster@stimme-der-hoffnung.de"
      />
      <Field label="Street and number" initialValue="Sandwiesenstraße 35" />
      <Field label="Postal Code" initialValue="64665" />
      <Field label="City" initialValue="Alsbach-Hähnlein" />
      <Field
        label="Country"
        type="select"
        initialValue="de"
        options={countries}
      />
      <Section title="Last donations" more="See all" to="/donations">
        {donations.map(({ date, ammount }, key) => (
          <Item
            key={`donation-${key}`}
            label={date}
            value={`${ammount}€`}
            to="/donations/details"
          />
        ))}
      </Section>
    </Screen>
  )
}

export default Profile
