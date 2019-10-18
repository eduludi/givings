import React from 'react'
import PropTypes from 'prop-types'

function Image({ className, name, alt, extension }) {
  const path = `images/${name}`

  return (
    <div className={className}>
      <img
        src={`${path}.${extension}`}
        srcSet={`${path}@2x.${extension} 2x`}
        alt={alt}
      />
    </div>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  extension: PropTypes.PropTypes.oneOf(['png', 'jpg', 'gif']),
  name: PropTypes.string,
}
Image.defaultProps = {
  alt: 'Missing alt!',
  className: '',
  name: 'no-name',
  extension: 'png',
}

export default Image
