import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatQuoteCloseIcon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z' />
  </Svg>
)

FormatQuoteCloseIcon.displayName = 'FormatQuoteCloseIcon'

FormatQuoteCloseIcon.defaultProps = {
  size: 24
}

export default FormatQuoteCloseIcon