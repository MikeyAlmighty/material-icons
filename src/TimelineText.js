import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TimelineTextIcon = ({
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
    <path d='M5,2V8H3V2H5M3,22H5V16H3V22M6,12C6,10.9 5.1,10 4,10C2.9,10 2,10.9 2,12C2,13.1 2.9,14 4,14C5.1,14 6,13.1 6,12M22,7V17C22,18.1 21.1,19 20,19H11C9.9,19 9,18.1 9,17V14L7,12L9,10V7C9,5.9 9.9,5 11,5H20C21.1,5 22,5.9 22,7M17,13H12V15H17V13M19,9H12V11H19V9Z' />
  </Svg>
)

TimelineTextIcon.displayName = 'TimelineTextIcon'

TimelineTextIcon.defaultProps = {
  size: 24
}

export default TimelineTextIcon