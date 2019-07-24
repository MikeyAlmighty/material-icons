import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookmarkMinusOutlineIcon = ({
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
    <path d='M9,11V9H15V11H9M19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17C18.11,3 19,3.9 19,5M17,5H7V18L12,15.82L17,18V5Z' />
  </Svg>
)

BookmarkMinusOutlineIcon.displayName = 'BookmarkMinusOutlineIcon'

BookmarkMinusOutlineIcon.defaultProps = {
  size: 24
}

export default BookmarkMinusOutlineIcon