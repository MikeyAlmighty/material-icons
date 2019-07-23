import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookPlayOutlineIcon = ({
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
    <path d='M17,16L22,19L17,22V16M18,2C19.1,2 20,2.9 20,4V15.42L18,14.27V4H13V12L10.5,9.75L8,12V4H6V20H15V22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2H18Z' />
  </Svg>
)

BookPlayOutlineIcon.displayName = 'BookPlayOutlineIcon'

BookPlayOutlineIcon.defaultProps = {
  size: 24
}

export default BookPlayOutlineIcon