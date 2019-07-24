import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BetamaxIcon = ({
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
    <path d='M4,5C2.9,5 2,5.9 2,7V17C2,18.1 2.9,19 4,19H20C21.1,19 22,18.1 22,17V7C22,5.9 21.1,5 20,5H4M8,9C10.21,9 12,10.79 12,13C12,15.21 10.21,17 8,17C5.79,17 4,15.21 4,13C4,10.79 5.79,9 8,9M13,9H20V17H13V9M8,11C6.9,11 6,11.9 6,13C6,14.1 6.9,15 8,15C9.1,15 10,14.1 10,13C10,11.9 9.1,11 8,11Z' />
  </Svg>
)

BetamaxIcon.displayName = 'BetamaxIcon'

BetamaxIcon.defaultProps = {
  size: 24
}

export default BetamaxIcon