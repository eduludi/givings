import React from 'react'
import { useHistory } from 'react-router-dom'

import IntroScreen from '../ui/IntroScreen'
import Wrapper from '../ui/Wrapper'
import Button from '../ui/Button'
import Downshift from 'downshift'

const churches = [
  {
    value: 'Adventgemeinde Landau',
  },
  {
    value: 'Altenkirchen',
  },
  {
    value: 'Bad Bergzabern',
  },
  {
    value: 'Bad Bodendorf',
  },
  {
    value: 'Bad Hersfeld',
  },
  {
    value: 'Bad Homburg',
  },
  {
    value: 'Bad Kreuznach',
  },
  {
    value: 'Batschweilerhof',
  },
  {
    value: 'Bendorf',
  },
  {
    value: 'Bensheim - Auerbach',
  },
  {
    value: 'Darmstadt - Eberstadt',
  },
  {
    value: 'Darmstadt - Marienhöhe',
  },
  {
    value: 'Darmstadt - Zentrum',
  },
  {
    value: 'Einöd / Saar',
  },
  {
    value: 'Erbach',
  },
  {
    value: 'Frankenthal',
  },
  {
    value: 'Frankfurt - Ost',
  },
  {
    value: 'Frankfurt - Unterliederbach',
  },
  {
    value: 'Frankfurt - Zentrum',
  },
  {
    value: 'Friedberg',
  },
  {
    value: 'Fulda',
  },
  {
    value: 'Gelnhausen',
  },
  {
    value: 'Gießen',
  },
  {
    value: 'Gladenbach',
  },
  {
    value: 'Hagenbach',
  },
]

function AnonymousDonation() {
  const history = useHistory()
  return (
    <IntroScreen>
      <Wrapper vertical className="items-center py-2">
        <h1 className="text-white text-center text-4xl pb-4">Donate</h1>
        <p className="text-white text-center">anonymously</p>
      </Wrapper>
      <Wrapper vertical className="px-8">
        <Downshift
          onChange={({ value }) => history.push('/donate', { church: value })}
          itemToString={item => (item ? item.value : '')}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
          }) => (
            <div>
              <div className="bg-white rounded overflow-hidden">
                <input
                  {...getInputProps()}
                  className="px-4 py-2 w-full border-b-2 border-solid border-transparent focus:border-blue-500 outline-none"
                  placeholder="Type the name of your church"
                />
              </div>
              <ul {...getMenuProps()}>
                {isOpen
                  ? churches
                      .filter(
                        item =>
                          !inputValue ||
                          item.value
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                      )
                      .map((item, index) => (
                        <li
                          {...getItemProps({
                            key: item.value,
                            index,
                            item,
                            style: {
                              backgroundColor:
                                highlightedIndex === index
                                  ? 'lightgray'
                                  : 'white',
                              fontWeight:
                                selectedItem === item ? 'bold' : 'normal',
                            },
                          })}
                        >
                          {item.value}
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          )}
        </Downshift>
        <p className="text-white text-center p-4">or</p>
        <Button
          label="Scan CODE"
          icon="qrcode"
          type="hollow"
          to="/scan-qr"
          className="my-4"
        />
      </Wrapper>
    </IntroScreen>
  )
}

export default AnonymousDonation
