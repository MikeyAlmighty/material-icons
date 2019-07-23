import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CarDoorIcon = ({
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
    <path d='M19,14H16V16H19V14M22,21H3V11L11,3H21C21.55,3 22,3.45 22,4V21M11.83,5L5.83,11H20V5H11.83Z' />
  </Svg>
)

CarDoorIcon.displayName = 'CarDoorIcon'

CarDoorIcon.defaultProps = {
  size: 24
}

export default CarDoorIcon