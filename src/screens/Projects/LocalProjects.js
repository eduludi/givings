import React from 'react'

import Header from '../../ui/Header'
import Section from '../../ui/Section'
import Item from '../../ui/Item'
import Screen from '../../ui/Screen'
import Button from '../../ui/Button'
import Wrapper from '../../ui/Wrapper'

const projects = [
  'Internet',
  'Offerings',
  'New temple',
  'Multimedia',
  'Website',
  'Temple expenses',
  'Local school',
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

function LocalProjects() {
  return (
    <Screen title="Projects">
      <Header title="Local Projects" subtitle="Darmstadt International" />
      <Section title="All local projects">
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

export default LocalProjects
