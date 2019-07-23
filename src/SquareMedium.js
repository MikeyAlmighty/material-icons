import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SquareMediumIcon = ({
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
    <path d='M16,8H8V16H16V8Z' />
  </Svg>
)

SquareMediumIcon.displayName = 'SquareMediumIcon'

SquareMediumIcon.defaultProps = {
  size: 24
}

export default SquareMediumIcon