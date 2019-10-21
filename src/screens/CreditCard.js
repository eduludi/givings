import React from 'react'

import Screen from '../ui/Screen'
import Field from '../ui/Field'
import Button from '../ui/Button'
import Wrapper from '../ui/Wrapper'

const expiry = [
  {
    label: '10/2019',
    value: '1019',
  },
  {
    label: '11/2019',
    value: '1119',
  },
  {
    label: '12/2019',
    value: '1219',
  },
  {
    label: '01/2020',
    value: '0120',
  },
  {
    label: '02/2020',
    value: '022020',
  },
  {
    label: '03/2020',
    value: '032020',
  },
  {
    label: '04/2020',
    value: '042020',
  },
  {
    label: '05/2020',
    value: '052020',
  },
]

function CreditCard() {
  return (
    <Screen title="Credit card information">
      <Field
        label="Card nNumber"
        type="text"
        initialValue="4242 4242 4242 4242"
      />
      <Field label="CV Code" type="number" initialValue="646" />
      <Field
        label="Expiry Date"
        type="select"
        initialValue="032020"
        options={expiry}
      />
      <Field
        label="Email"
        initialValue="sascha.schuster@stimme-der-hoffnung.de"
      />
      <Wrapper vertical>
        <Button
          label="Confirm donation"
          icon="credit-card"
          type="primary"
          to="/donations/details"
        />
      </Wrapper>
    </Screen>
  )
}

export default CreditCard
