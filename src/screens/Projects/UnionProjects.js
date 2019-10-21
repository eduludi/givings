import React from 'react'

import Header from '../../ui/Header'
import Section from '../../ui/Section'
import Item from '../../ui/Item'
import Screen from '../../ui/Screen'
import Button from '../../ui/Button'
import Wrapper from '../../ui/Wrapper'

const projects = [
  'Internet Ministries',
  'His Hands',
  'Icor',
  'ADRA',
  "Children's Ministries",
  'Communication',
  'Education',
  'Family Ministries',
  'Health Ministries',
  'Personal Ministries',
  'Religious Liberty',
  'Publishing',
  'Sabbath School',
  'Special Needs',
  'Stewardship',
  "Women's Ministries",
  'Youth Ministries',
]

function UnionProjects() {
  return (
    <Screen title="Projects">
      <Header title="Union Projects" subtitle="South German Union Conference" />
      <Section title="All Union projects">
        {projects.sort().map((type, key) => (
          <Item
            key={`project-${key}`}
            label={type}
            value="0.00"
            to="/projects/detail"
          />
        ))}
      </Section>
      <Wrapper vertical>
        <Button label="Continue" icon="donate" type="primary" to="/donate" />
      </Wrapper>
    </Screen>
  )
}

export default UnionProjects
