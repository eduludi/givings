import React from 'react'

import { useLocation } from 'react-router-dom'

import Button from '../ui/Button'
import Header from '../ui/Header'
import Section from '../ui/Section'
import Stats from '../ui/Stats'
import Item from '../ui/Item'
import Screen from '../ui/Screen'
import Wrapper from '../ui/Wrapper'

const stats = [
  { label: 'Local', count: 21, url: '/projects' },
  { label: 'Conference', url: '/projects/conference', count: 12 },
  { label: 'Union', url: '/projects/union', count: 6 },
]

function DonateStart() {
  const location = useLocation()

  var title
  if (typeof location.state !== 'undefined') {
    title = location.state.church
  } else {
    title = 'Darmstadt International'
  }

  return (
    <Screen title="Donate">
      <Header
        title={title}
        subtitle="South German Union Conference, Central Rhenish Conference"
        description="Here you can see featured local, conference and union projects. You also can see the complete lists."
      />

      <Stats items={stats} />

      <Section title="Local projects" more="See complete list" to="/projects">
        <Item label="Tithe" value="0.00 €" to="/projects/detail" />
        <Item label="Offerings" value="0.00 €" to="/projects/detail" />
      </Section>

      <Section
        title="Conference projects"
        more="See complete list"
        to="/projects/conference"
      >
        <Item label="Online church" value="0.00 €" to="/projects/detail" />
      </Section>

      <Section
        title="Union projects"
        more="See complete list"
        to="/projects/union"
      >
        <Item label="His Hands" value="0.00 €" to="/projects/detail" />
      </Section>

      <Section>
        <Item label="TOTAL" value="0.00 €" />
      </Section>
    </Screen>
  )
}

export default DonateStart
