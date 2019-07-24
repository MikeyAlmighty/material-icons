import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DivingScubaFlagIcon = ({
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
    <path d='M2,6L19,20H2V6M5,4L22,18V4H5Z' />
  </Svg>
)

DivingScubaFlagIcon.displayName = 'DivingScubaFlagIcon'

DivingScubaFlagIcon.defaultProps = {
  size: 24
}

export default DivingScubaFlagIcon