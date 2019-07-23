import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StopIcon = ({
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
    <path d='M18,18H6V6H18V18Z' />
  </Svg>
)

StopIcon.displayName = 'StopIcon'

StopIcon.defaultProps = {
  size: 24
}

export default StopIcon