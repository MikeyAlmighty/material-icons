import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MovieIcon = ({
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
    <path d='M18,4L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V4H18Z' />
  </Svg>
)

MovieIcon.displayName = 'MovieIcon'

MovieIcon.defaultProps = {
  size: 24
}

export default MovieIcon