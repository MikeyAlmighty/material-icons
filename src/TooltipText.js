import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TooltipTextIcon = ({
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
    <path d='M4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H16L12,22L8,18H4C2.9,18 2,17.1 2,16V4C2,2.9 2.9,2 4,2M5,5V7H19V5H5M5,9V11H15V9H5M5,13V15H17V13H5Z' />
  </Svg>
)

TooltipTextIcon.displayName = 'TooltipTextIcon'

TooltipTextIcon.defaultProps = {
  size: 24
}

export default TooltipTextIcon