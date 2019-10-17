import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Section from './Section'

function Field({ label, type, initialValue, options, placeholder, rounded }) {
  const [value, setValue] = useState(initialValue)
  function _onChange({ target }) {
    setValue(target.value)
  }

  return (
    <Section title={label} rounded={rounded}>
      {type === 'select' && options ? (
        <select
          defaultValue={initialValue}
          className="px-4 py-3 bg-white w-full border-2 border-solid border-transparent outline-none"
        >
          {options.map(({ label, value }, key) => (
            <option value={value} key={`field-option-${key}`}>
              {label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={_onChange}
          className="px-4 py-2 w-full border-2 border-solid border-transparent focus:border-blue-500 outline-none"
          placeholder={placeholder}
        />
      )}
    </Section>
  )
}

Field.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  type: PropTypes.oneOf(['text', 'email', 'phone', 'number', 'select']),
  placeholder: PropTypes.string,
  rounded: PropTypes.bool,
}
Field.defaultProps = {
  type: 'text',
}

export default Field
