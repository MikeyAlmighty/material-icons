import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileMoveIcon = ({
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
    <path d='M14,17H18V14L23,18.5L18,23V20H14V17M13,9H18.5L13,3.5V9M6,2H14L20,8V12.34C19.37,12.12 18.7,12 18,12C14.69,12 12,14.69 12,18C12,19.54 12.58,20.94 13.53,22H6C4.89,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2Z' />
  </Svg>
)

FileMoveIcon.displayName = 'FileMoveIcon'

FileMoveIcon.defaultProps = {
  size: 24
}

export default FileMoveIcon