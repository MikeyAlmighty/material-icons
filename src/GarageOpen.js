import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GarageOpenIcon = ({
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
    <path d='M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12Z' />
  </Svg>
)

GarageOpenIcon.displayName = 'GarageOpenIcon'

GarageOpenIcon.defaultProps = {
  size: 24
}

export default GarageOpenIcon