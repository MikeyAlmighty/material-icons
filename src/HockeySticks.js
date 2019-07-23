import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HockeySticksIcon = ({
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
    <path d='M7.58,3L5.05,4.61L9.04,10.87L10.82,8.08L7.58,3M16.43,3L7.5,17H2V21H8.5L18.96,4.61L16.43,3M14.97,14.59L13.19,17.38L15.5,21H22V17H16.5L14.97,14.59Z' />
  </Svg>
)

HockeySticksIcon.displayName = 'HockeySticksIcon'

HockeySticksIcon.defaultProps = {
  size: 24
}

export default HockeySticksIcon