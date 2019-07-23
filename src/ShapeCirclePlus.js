import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ShapeCirclePlusIcon = ({
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
    <path d='M11,19C14.31,19 17,16.31 17,13H19C19,17.42 15.42,21 11,21C6.58,21 3,17.42 3,13C3,8.58 6.58,5 11,5V7C7.69,7 5,9.69 5,13C5,16.31 7.69,19 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z' />
  </Svg>
)

ShapeCirclePlusIcon.displayName = 'ShapeCirclePlusIcon'

ShapeCirclePlusIcon.defaultProps = {
  size: 24
}

export default ShapeCirclePlusIcon