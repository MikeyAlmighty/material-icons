import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatQuoteOpenIcon = ({
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
    <path d='M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z' />
  </Svg>
)

FormatQuoteOpenIcon.displayName = 'FormatQuoteOpenIcon'

FormatQuoteOpenIcon.defaultProps = {
  size: 24
}

export default FormatQuoteOpenIcon