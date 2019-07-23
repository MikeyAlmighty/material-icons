import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StepForward2Icon = ({
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
    <path d='M7,5H10V19H7V5M12,5L23,12L12,19V5M2,5H5V19H2V5Z' />
  </Svg>
)

StepForward2Icon.displayName = 'StepForward2Icon'

StepForward2Icon.defaultProps = {
  size: 24
}

export default StepForward2Icon