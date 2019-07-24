import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WallSconceVariantIcon = ({
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
    <path d='M11,4.5V7.5H13V4.5H11M4.91,7L3.5,8.41L5.27,10.18L6.68,8.77L4.91,7M19.09,7L17.32,8.77L18.73,10.18L20.5,8.41L19.09,7M4,11.5C4,14.36 5.5,17 8,18.43C10.5,19.86 13.5,19.86 16,18.43C18.5,17 20,14.36 20,11.5H12L4,11.5Z' />
  </Svg>
)

WallSconceVariantIcon.displayName = 'WallSconceVariantIcon'

WallSconceVariantIcon.defaultProps = {
  size: 24
}

export default WallSconceVariantIcon