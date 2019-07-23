import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookmarkOutlineIcon = ({
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
    <path d='M17,18L12,15.82L7,18V5H17M17,3H7C5.9,3 5,3.9 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z' />
  </Svg>
)

BookmarkOutlineIcon.displayName = 'BookmarkOutlineIcon'

BookmarkOutlineIcon.defaultProps = {
  size: 24
}

export default BookmarkOutlineIcon