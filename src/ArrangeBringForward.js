import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrangeBringForwardIcon = ({
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
    <path d='M2,2H16V16H2V2M22,8V22H8V18H10V20H20V10H18V8H22Z' />
  </Svg>
)

ArrangeBringForwardIcon.displayName = 'ArrangeBringForwardIcon'

ArrangeBringForwardIcon.defaultProps = {
  size: 24
}

export default ArrangeBringForwardIcon