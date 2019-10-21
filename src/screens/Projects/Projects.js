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
  'Tihte',
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

function Projects() {
  return (
    <Screen title="Projects">
      <Header title="Projects" />

      <Section title="Last projects">
        {donations.map(({ date, type, ammount }, key) => (
          <Item
            key={`project-${key}`}
            label={type}
            // sublabel={type}
            value={`${ammount}€`}
            to="/projects/details"
          />
        ))}
      </Section>
    </Screen>
  )
}

export default Projects