import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BorderAllVariantIcon = ({
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
    <path d='M3,21V3H21V21H3M5,5V19H19V5H5Z' />
  </Svg>
)

BorderAllVariantIcon.displayName = 'BorderAllVariantIcon'

BorderAllVariantIcon.defaultProps = {
  size: 24
}

export default BorderAllVariantIcon