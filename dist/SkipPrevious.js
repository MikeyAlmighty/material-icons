import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SkipPreviousIcon = ({
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
    <path d='M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z' />
  </Svg>
)

SkipPreviousIcon.displayName = 'SkipPreviousIcon'

SkipPreviousIcon.defaultProps = {
  size: 24
}

export default SkipPreviousIcon