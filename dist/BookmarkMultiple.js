import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookmarkMultipleIcon = ({
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
    <path d='M15,5C16.1,5 17,5.9 17,7V23L10,20L3,23V7C3,5.89 3.9,5 5,5H15M9,1H19C20.1,1 21,1.9 21,3V19L19,18.13V3H7C7,1.9 7.9,1 9,1Z' />
  </Svg>
)

BookmarkMultipleIcon.displayName = 'BookmarkMultipleIcon'

BookmarkMultipleIcon.defaultProps = {
  size: 24
}

export default BookmarkMultipleIcon