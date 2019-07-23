import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EthernetCableOffIcon = ({
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
    <path d='M11,3H13V7H11V3M8,4H10V8H14V4H16V11H12.82L8,6.18V4M20,20.72L18.73,22L14,17.27V22H10V13.27L2,5.27L3.28,4L20,20.72Z' />
  </Svg>
)

EthernetCableOffIcon.displayName = 'EthernetCableOffIcon'

EthernetCableOffIcon.defaultProps = {
  size: 24
}

export default EthernetCableOffIcon