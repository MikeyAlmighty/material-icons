import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SwapVerticalBoldIcon = ({
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
    <path d='M14,8H11V14H6V8H3L8.5,2L14,8M15.5,22L21,16H18V10H13V16H10L15.5,22Z' />
  </Svg>
)

SwapVerticalBoldIcon.displayName = 'SwapVerticalBoldIcon'

SwapVerticalBoldIcon.defaultProps = {
  size: 24
}

export default SwapVerticalBoldIcon