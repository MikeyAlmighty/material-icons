import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EthernetCableIcon = ({
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
    <path d='M11,3V7H13V3H11M8,4V11H16V4H14V8H10V4H8M10,12V22H14V12H10Z' />
  </Svg>
)

EthernetCableIcon.displayName = 'EthernetCableIcon'

EthernetCableIcon.defaultProps = {
  size: 24
}

export default EthernetCableIcon