import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SkipNextOutlineIcon = ({
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
    <path d='M6,18L14.5,12L6,6M8,9.86L11.03,12L8,14.14M16,6H18V18H16' />
  </Svg>
)

SkipNextOutlineIcon.displayName = 'SkipNextOutlineIcon'

SkipNextOutlineIcon.defaultProps = {
  size: 24
}

export default SkipNextOutlineIcon