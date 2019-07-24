import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SwapHorizontalIcon = ({
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
    <path d='M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z' />
  </Svg>
)

SwapHorizontalIcon.displayName = 'SwapHorizontalIcon'

SwapHorizontalIcon.defaultProps = {
  size: 24
}

export default SwapHorizontalIcon