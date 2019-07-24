import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookmarkMinusIcon = ({
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
    <path d='M17,3H7C5.9,3 5,3.9 5,5V21L12,18L19,21V5C19,3.9 18.1,3 17,3M15,11H9V9H15V11Z' />
  </Svg>
)

BookmarkMinusIcon.displayName = 'BookmarkMinusIcon'

BookmarkMinusIcon.defaultProps = {
  size: 24
}

export default BookmarkMinusIcon