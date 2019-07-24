import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookmarkOffOutlineIcon = ({
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
    <path d='M3.28,4L2,5.27L5,8.27V21L12,18L16.78,20.05L18.73,22L20,20.72L3.28,4M7,18V10.27L13,16.25L12,15.82L7,18M7,5.16L5.5,3.67C5.88,3.26 6.41,3 7,3H17C18.1,3 19,3.9 19,5V17.16L17,15.16V5H7V5.16Z' />
  </Svg>
)

BookmarkOffOutlineIcon.displayName = 'BookmarkOffOutlineIcon'

BookmarkOffOutlineIcon.defaultProps = {
  size: 24
}

export default BookmarkOffOutlineIcon