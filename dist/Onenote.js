import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const OnenoteIcon = ({
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
    <path d='M1.96,4.8L14,3.08V5H20L21,5C21.55,5 22,5.45 22,6V10C22,10.55 21.55,11 21,11H20V19H14V21L1.96,19.21V4.8M11,16.75V8.25L9,8.5V12.75L7,8.75L5,9V16L6.5,16.25V10.75L9,16.5L11,16.75M14,14H18V13H14V14M14,11H18V10H14V11M14,8H18V7H14V8M14,16V17H18V16H14Z' />
  </Svg>
)

OnenoteIcon.displayName = 'OnenoteIcon'

OnenoteIcon.defaultProps = {
  size: 24
}

export default OnenoteIcon