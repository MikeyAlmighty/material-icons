import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StepBackward2Icon = ({
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
    <path d='M17,5H14V19H17V5M12,5L1,12L12,19V5M22,5H19V19H22V5Z' />
  </Svg>
)

StepBackward2Icon.displayName = 'StepBackward2Icon'

StepBackward2Icon.defaultProps = {
  size: 24
}

export default StepBackward2Icon