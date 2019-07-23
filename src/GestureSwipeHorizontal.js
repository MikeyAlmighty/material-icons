import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GestureSwipeHorizontalIcon = ({
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
    <path d='M6,1L3,4L6,7V5H9V7L12,4L9,1V3H6V1M11,8C10.45,8 10,8.45 10,9V19L6.8,17.28H6.58C6.3,17.28 6.03,17.39 5.84,17.6L5.1,18.37L10,22.57C10.26,22.85 10.62,23 11,23H17.5C18.33,23 19,22.33 19,21.5V17.14C19,16.56 18.68,16.03 18.15,15.79L13.21,13.6L12,13.47V9C12,8.45 11.55,8 11,8Z' />
  </Svg>
)

GestureSwipeHorizontalIcon.displayName = 'GestureSwipeHorizontalIcon'

GestureSwipeHorizontalIcon.defaultProps = {
  size: 24
}

export default GestureSwipeHorizontalIcon