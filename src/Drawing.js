import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DrawingIcon = ({
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
    <path d='M8.5,3C11.54,3 14,5.46 14,8.5C14,9.83 13.53,11.05 12.74,12H21V21H12V12.74C11.05,13.53 9.83,14 8.5,14C5.46,14 3,11.54 3,8.5C3,5.46 5.46,3 8.5,3Z' />
  </Svg>
)

DrawingIcon.displayName = 'DrawingIcon'

DrawingIcon.defaultProps = {
  size: 24
}

export default DrawingIcon