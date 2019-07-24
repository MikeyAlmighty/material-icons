import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SwapVerticalIcon = ({
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
    <path d='M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z' />
  </Svg>
)

SwapVerticalIcon.displayName = 'SwapVerticalIcon'

SwapVerticalIcon.defaultProps = {
  size: 24
}

export default SwapVerticalIcon