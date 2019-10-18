import React from 'react'

import Button from '../ui/Button'
import Header from '../ui/Header'
import Section from '../ui/Section'
import Item from '../ui/Item'
import Screen from '../ui/Screen'
import Wrapper from '../ui/Wrapper'

function Donate({ ...props }) {
  return (
    <Screen title="Donate">
      <Header
        title="Darmstadt International"
        subtitle="Freikirche der Siebenten-Tags-Adventisten, Süddeutscher Verband KdöR"
        description="Duis sit amet scelerisque turpis. Fusce in ultricies velit. Praesent blandit pellentesque nisl, eu porttitor."
      />

      <Section title="Last donations" more="See list" to="/donations">
        <Item label="Thite" value="221.67 €" to="/donations/details" />
        <Item label="Offerings" value="50.00 €" to="/donations/details" />
        <Item label="Offerings" value="30.00 €" to="/donations/details" />
      </Section>

      <Wrapper vertical>
        <Button
          label="Finish donation"
          icon="credit-card"
          type="primary"
          to="/donation/finish"
        />
      </Wrapper>
    </Screen>
  )
}

Donate.propTypes = {}
Donate.defaultProps = {}

export default Donate
