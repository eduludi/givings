import React from 'react'
import PropTypes from 'prop-types'

function Image({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
}
Image.defaultProps = {
  alt: 'Missing alt!',
  src: '!',
}

export default Image
