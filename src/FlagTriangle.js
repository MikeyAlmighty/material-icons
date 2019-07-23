import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlagTriangleIcon = ({
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
    <path d='M7,2H9V22H7V2M19,9L11,14.6V3.4L19,9Z' />
  </Svg>
)

FlagTriangleIcon.displayName = 'FlagTriangleIcon'

FlagTriangleIcon.defaultProps = {
  size: 24
}

export default FlagTriangleIcon