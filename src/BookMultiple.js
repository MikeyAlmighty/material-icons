import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookMultipleIcon = ({
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
    <path d='M19,18H9C7.9,18 7,17.1 7,16V4C7,2.9 7.9,2 9,2H10V7L12,5.5L14,7V2H19C20.1,2 21,2.9 21,4V16C21,17.1 20.1,18 19,18M17,20V22H5C3.9,22 3,21.1 3,20V6H5V20H17Z' />
  </Svg>
)

BookMultipleIcon.displayName = 'BookMultipleIcon'

BookMultipleIcon.defaultProps = {
  size: 24
}

export default BookMultipleIcon