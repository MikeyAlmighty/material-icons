import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric7BoxMultipleIcon = ({
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
    <path d='M3,5V21H19V23H3C1.9,23 1,22.1 1,21V5H3M13,15L17,7V5H11V7H15L11,15H13M21,1C22.1,1 23,1.9 23,3V17C23,18.1 22.1,19 21,19H7C5.9,19 5,18.1 5,17V3C5,1.9 5.9,1 7,1H21Z' />
  </Svg>
)

Numeric7BoxMultipleIcon.displayName = 'Numeric7BoxMultipleIcon'

Numeric7BoxMultipleIcon.defaultProps = {
  size: 24
}

export default Numeric7BoxMultipleIcon