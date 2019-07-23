import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CheckerboardIcon = ({
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
    <path d='M3,3H21V21H3V3M5,5V12H12V19H19V12H12V5H5Z' />
  </Svg>
)

CheckerboardIcon.displayName = 'CheckerboardIcon'

CheckerboardIcon.defaultProps = {
  size: 24
}

export default CheckerboardIcon