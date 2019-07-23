import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StepForwardIcon = ({
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
    <path d='M5,5V19H8V5M10,5V19L21,12' />
  </Svg>
)

StepForwardIcon.displayName = 'StepForwardIcon'

StepForwardIcon.defaultProps = {
  size: 24
}

export default StepForwardIcon