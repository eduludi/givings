import React from 'react'

import Header from '../../ui/Header'
import Screen from '../../ui/Screen'
import Section from '../../ui/Section'
import Image from '../../ui/Image'
import Item from '../../ui/Item'
import Wrapper from '../../ui/Wrapper'

function Detail() {
  return (
    <Screen title="Project Detail">
      <Header
        title="Online church"
        subtitle="South German Union Conference"
        description="Duis sit amet scelerisque turpis. Fusce in ultricies velit. Praesent blandit pellentesque nisl, eu porttitor lorem efficitur nec."
      />
      <Image name="project-image-1" />

      <Section title="Donate to this project">
        <Item
          label="Online church"
          // sublabel={type}
          value={`50.00 €`}
          // to="/donations/details"
        />
      </Section>

      <Section title="Learn more about this project">
        <Wrapper>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          aperiam dolorem minus culpa nihil, eos veritatis similique quis
          eveniet facilis eum officia sed praesentium recusandae enim tenetur
          explicabo distinctio magni perferendis quia quam quidem alias! Nihil
          inventore accusamus ex et.
        </Wrapper>
      </Section>
    </Screen>
  )
}

export default Detail
