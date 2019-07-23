import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SkipNextIcon = ({
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
    <path d='M16,18H18V6H16M6,18L14.5,12L6,6V18Z' />
  </Svg>
)

SkipNextIcon.displayName = 'SkipNextIcon'

SkipNextIcon.defaultProps = {
  size: 24
}

export default SkipNextIcon