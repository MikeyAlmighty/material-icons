import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlashOffIcon = ({
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
    <path d='M17,10H13L17,2H7V4.18L15.46,12.64M3.27,3L2,4.27L7,9.27V13H10V22L13.58,15.86L17.73,20L19,18.73L3.27,3Z' />
  </Svg>
)

FlashOffIcon.displayName = 'FlashOffIcon'

FlashOffIcon.defaultProps = {
  size: 24
}

export default FlashOffIcon