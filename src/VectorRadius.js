import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VectorRadiusIcon = ({
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
    <path d='M2,4H4V2H10V4C15.52,4 20,8.48 20,14H22V20H20V22H18V20H16V14H18C18,9.58 14.42,6 10,6V8H4V6H2V4M18,16V18H20V16H18M6,4V6H8V4H6Z' />
  </Svg>
)

VectorRadiusIcon.displayName = 'VectorRadiusIcon'

VectorRadiusIcon.defaultProps = {
  size: 24
}

export default VectorRadiusIcon