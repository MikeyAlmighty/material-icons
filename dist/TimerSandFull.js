import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TimerSandFullIcon = ({
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
    <path d='M6,2V8H6V8L10,12L6,16V16H6V22H18V16H18V16L14,12L18,8V8H18V2H6Z' />
  </Svg>
)

TimerSandFullIcon.displayName = 'TimerSandFullIcon'

TimerSandFullIcon.defaultProps = {
  size: 24
}

export default TimerSandFullIcon