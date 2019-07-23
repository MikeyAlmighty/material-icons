import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookmarkOffIcon = ({
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
    <path d='M20,20.72L18.73,22L16.78,20.05L12,18L5,21V8.27L2,5.27L3.28,4L20,20.72M19,17.16V5C19,3.89 18.1,3 17,3H7C6.41,3 5.89,3.27 5.5,3.68L19,17.16Z' />
  </Svg>
)

BookmarkOffIcon.displayName = 'BookmarkOffIcon'

BookmarkOffIcon.defaultProps = {
  size: 24
}

export default BookmarkOffIcon