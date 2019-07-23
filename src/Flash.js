import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlashIcon = ({
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
    <path d='M7,2V13H10V22L17,10H13L17,2H7Z' />
  </Svg>
)

FlashIcon.displayName = 'FlashIcon'

FlashIcon.defaultProps = {
  size: 24
}

export default FlashIcon