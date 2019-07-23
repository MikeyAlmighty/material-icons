import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GateAndIcon = ({
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
    <path d='M2,4V20H14C18.42,20 22,16.42 22,12C22,7.58 18.42,4 14,4H2M4,6H14C17.31,6 20,8.69 20,12C20,15.31 17.31,18 14,18H4V6Z' />
  </Svg>
)

GateAndIcon.displayName = 'GateAndIcon'

GateAndIcon.defaultProps = {
  size: 24
}

export default GateAndIcon