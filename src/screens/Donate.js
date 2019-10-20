import React from 'react'

import Button from '../ui/Button'
import Header from '../ui/Header'
import Section from '../ui/Section'
import Stats from '../ui/Stats'
import Item from '../ui/Item'
import Screen from '../ui/Screen'
import Wrapper from '../ui/Wrapper'

const stats = [
  { label: 'Local', count: 16, url: '#local', highlighted: true },
  { label: 'Conference', url: '#conference', count: 12 },
  { label: 'Union', url: '#union', count: 6 },
]

function Donate() {
  return (
    <Screen title="Donate">
      <Header
        title="Darmstadt International"
        subtitle="Freikirche der Siebenten-Tags-Adventisten, Süddeutscher Verband KdöR"
        description="Duis sit amet scelerisque turpis. Fusce in ultricies velit. Praesent blandit pellentesque nisl, eu porttitor."
      />

      <Stats items={stats} />

      <Section title="Local projects" more="See list" to="/donations">
        <Item label="Thite" value="221.67 €" to="/donations/details" />
        <Item label="Offerings" value="50.00 €" to="/donations/details" />
      </Section>

      <Section title="Conference projects" more="See list" to="/donations">
        <Item label="Online church" value="120.00 €" to="/donations/details" />
        <Item label="Project X" value="150.00 €" to="/donations/details" />
      </Section>

      <Wrapper vertical>
        <Button
          label="Confirm donation"
          icon="credit-card"
          type="primary"
          to="/donation/finish"
        />
      </Wrapper>
    </Screen>
  )
}

export default Donate
