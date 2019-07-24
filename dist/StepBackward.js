import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StepBackwardIcon = ({
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
    <path d='M19,5V19H16V5M14,5V19L3,12' />
  </Svg>
)

StepBackwardIcon.displayName = 'StepBackwardIcon'

StepBackwardIcon.defaultProps = {
  size: 24
}

export default StepBackwardIcon