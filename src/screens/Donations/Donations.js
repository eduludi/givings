import React from 'react'

import Header from '../../ui/Header'
import Section from '../../ui/Section'
import Item from '../../ui/Item'
import Screen from '../../ui/Screen'

import { range } from '../../utils/array'

function rand(number) {
  return Math.floor(Math.random() * number) + 1
}

const projects = [
  'Internet',
  'Thite',
  'Offerings',
  'ADRA',
  'Youth Ministery',
  'Child Ministery',
  'Project X',
  'Project Y',
  'Project Z',
]

const donations = range(0, 100).map(i => ({
  date: `${rand(31)}.${rand(12)}.2019`,
  type: projects[rand(4)],
  ammount: `${rand(250)}.${rand(99)}`,
}))

function Donate({ ...props }) {
  return (
    <Screen title="My Donations">
      <Header title="Your Donations" />

      <Section title="Last donations">
        {donations.map(({ date, type, ammount }, key) => (
          <Item
            key={`donation-${key}`}
            label={date}
            // sublabel={type}
            value={`${ammount}€`}
            to="/donations/details"
          />
        ))}
      </Section>
    </Screen>
  )
}

Donate.propTypes = {}
Donate.defaultProps = {}

export default Donate
