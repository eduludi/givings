import React from 'react'

import Section from '../../ui/Section'
import Item from '../../ui/Item'
import Screen from '../../ui/Screen'

import { range } from '../../utils/array'

function rand(number) {
  return Math.floor(Math.random() * number) + 1
}

const projects = [
  'Internet',
  'Tithe',
  'Offerings',
  'ADRA',
  "Youth's Ministries",
  "Child's Ministries",
  'Project X',
  'Project Y',
  'Project Z',
]

const donations = range(0, 100).map(i => ({
  date: `${rand(31)}/${rand(12)}/2019`,
  type: projects[rand(4)],
  ammount: `${rand(250)}.${rand(99)}`,
}))

function Donations() {
  return (
    <Screen title="My Donations">
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

export default Donations
