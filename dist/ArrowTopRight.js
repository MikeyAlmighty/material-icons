import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowTopRightIcon = ({
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
    <path d='M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z' />
  </Svg>
)

ArrowTopRightIcon.displayName = 'ArrowTopRightIcon'

ArrowTopRightIcon.defaultProps = {
  size: 24
}

export default ArrowTopRightIcon