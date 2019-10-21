import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Section from './Section'

function Field({
  initialValue,
  label,
  onChange,
  options,
  placeholder,
  rounded,
  type,
}) {
  const [value, setValue] = useState(
    initialValue || (type === 'select' ? 'none' : null)
  )

  function _onChange({ target }) {
    setValue(target.value)

    if (onChange) {
      onChange(target.value)
    }
  }

  return (
    <Section title={label} rounded={rounded}>
      {type === 'select' && options ? (
        <select
          value={value}
          className="px-4 py-3 bg-white w-full border-2 border-solid border-transparent outline-none"
          onChange={_onChange}
        >
          <option hidden disabled value="none">
            {placeholder ? placeholder : 'Select one...'}
          </option>
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
          className="px-4 py-2 w-full border-b-2 border-solid border-transparent focus:border-blue-500 outline-none"
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
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rounded: PropTypes.bool,
  onChange: PropTypes.func,
}
Field.defaultProps = {
  type: 'text',
}

export default Field
