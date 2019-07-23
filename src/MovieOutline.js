import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MovieOutlineIcon = ({
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
    <path d='M5.76,10H20V18H4V6.47M22,4H18L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V4Z' />
  </Svg>
)

MovieOutlineIcon.displayName = 'MovieOutlineIcon'

MovieOutlineIcon.defaultProps = {
  size: 24
}

export default MovieOutlineIcon