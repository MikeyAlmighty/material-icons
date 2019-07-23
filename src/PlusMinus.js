import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PlusMinusIcon = ({
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
    <path d='M11,4V9H6V11H11V16H13V11H18V9H13V4H11M6,18V20H18V18H6Z' />
  </Svg>
)

PlusMinusIcon.displayName = 'PlusMinusIcon'

PlusMinusIcon.defaultProps = {
  size: 24
}

export default PlusMinusIcon