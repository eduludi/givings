import React from 'react'

import IntroScreen from '../ui/IntroScreen'
import Wrapper from '../ui/Wrapper'
import Field from '../ui/Field'
import Button from '../ui/Button'

const unions = [
  {
    label: 'Austrian Union of Churches Conference',
    value: 'at',
  },
  {
    label: 'Bulgarian Union of Churches Conference',
    value: 'bg',
  },
  {
    label: 'Czecho-Slovakian Union Conference',
    value: 'cz',
  },
  {
    label: 'Franco-Belgian Union Conference',
    value: 'fr',
  },
  {
    label: 'Italian Union of Churches Conference',
    value: 'it',
  },
  {
    label: 'North German Union Conference',
    value: 'nd',
  },
  {
    label: 'Portuguese Union of Churches Conference',
    value: 'pt',
  },
  {
    label: 'South German Union Conference',
    value: 'sd',
  },
  {
    label: 'Spanish Union of Churches Conference',
    value: 'es',
  },
  {
    label: 'Swiss Union Conference',
    value: 'ch',
  },
]

const conferences = [
  {
    label: 'Baden - Wuerttemberg Conference',
    value: 'bw',
  },
  {
    label: 'Bavarian Conference',
    value: 'ba',
  },
  {
    label: 'Central Rhenish Conference',
    value: 'cr',
  },
]

const churches = [
  {
    label: 'Adventgemeinde Landau',
    value: 'bw',
  },
  {
    label: 'Altenkirchen',
    value: 'bw',
  },
  {
    label: 'Bad Bergzabern',
    value: 'bw',
  },
  {
    label: 'Bad Bodendorf',
    value: 'bw',
  },
  {
    label: 'Bad Hersfeld',
    value: 'bw',
  },
  {
    label: 'Bad Homburg',
    value: 'bw',
  },
  {
    label: 'Bad Kreuznach',
    value: 'bw',
  },
  {
    label: 'Batschweilerhof',
    value: 'bw',
  },
  {
    label: 'Bendorf',
    value: 'bw',
  },
  {
    label: 'Bensheim - Auerbach',
    value: 'bw',
  },
  {
    label: 'Darmstadt - Eberstadt',
    value: 'bw',
  },
  {
    label: 'Darmstadt - Marienhöhe',
    value: 'bw',
  },
  {
    label: 'Darmstadt - Zentrum',
    value: 'dc',
  },
  {
    label: 'Einöd / Saar',
    value: 'bw',
  },
  {
    label: 'Erbach',
    value: 'bw',
  },
  {
    label: 'Frankenthal',
    value: 'bw',
  },
  {
    label: 'Frankfurt - Ost',
    value: 'bw',
  },
  {
    label: 'Frankfurt - Unterliederbach',
    value: 'bw',
  },
  {
    label: 'Frankfurt - Zentrum',
    value: 'bw',
  },
  {
    label: 'Friedberg',
    value: 'bw',
  },
  {
    label: 'Fulda',
    value: 'bw',
  },
  {
    label: 'Gelnhausen',
    value: 'bw',
  },
  {
    label: 'Gießen',
    value: 'bw',
  },
  {
    label: 'Gladenbach',
    value: 'bw',
  },
  {
    label: 'Hagenbach',
    value: 'bw',
  },
]

function PickChurch() {
  function _onChurchChange(value) {
    //console.log(value)
  }

  return (
    <IntroScreen>
      <Wrapper vertical className="items-center py-2">
        <h1 className="text-white text-center text-4xl">Pick your church</h1>
        <p className="text-white">To show you relevant projects.</p>
      </Wrapper>
      <Wrapper vertical className="px-8">
        <Field
          placeholder="Pick your union"
          type="select"
          options={unions}
          rounded
        />
        <Field
          placeholder="Pick your conference"
          type="select"
          options={conferences}
          rounded
        />
        <Field
          placeholder="Pick your local church"
          type="select"
          onChange={_onChurchChange}
          options={churches}
          rounded
        />
        <Button
          label="Save"
          icon="save"
          to="/church-projects"
          className="mt-4"
        />
      </Wrapper>
    </IntroScreen>
  )
}

export default PickChurch
