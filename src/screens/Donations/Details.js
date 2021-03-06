import React from 'react'

import Header from '../../ui/Header'
import Section from '../../ui/Section'
import Item from '../../ui/Item'
import Screen from '../../ui/Screen'

function DonnationDetails() {
  return (
    <Screen title="Donation detail">
      <Header title="Donation #34569" subtitle="on 10/10/2019" />

      <Section>
        <Item label="Total" value="593.34 €" />
      </Section>

      <Section title="To local church">
        <Item label="18/09/2019" sublabel="Tithe" value="221.67 €" />
        <Item label="17/09/2019" sublabel="Offerings" value="50.00 €" />
      </Section>

      <Section title="To Union Projects">
        <Item label="12/09/2019" sublabel="Online church" value="50.00 €" />
        <Item label="15/08/2019" sublabel="Caleb" value="221.67 €" />
        <Item label="12/08/2019" sublabel="His Hands" value="50.00 €" />
      </Section>
    </Screen>
  )
}

export default DonnationDetails
