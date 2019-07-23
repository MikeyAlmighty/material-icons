import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FoodCroissantIcon = ({
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
    <path d='M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z' />
  </Svg>
)

FoodCroissantIcon.displayName = 'FoodCroissantIcon'

FoodCroissantIcon.defaultProps = {
  size: 24
}

export default FoodCroissantIcon