import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MagnifyMinusCursorIcon = ({
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
    <path d='M11,4C14.87,4 18,7.13 18,11C18,12.5 17.5,14 16.61,15.19L17.42,16H18L23,21L21,23L16,18V17.41L15.19,16.6C12.1,18.92 7.71,18.29 5.39,15.2C3.07,12.11 3.7,7.72 6.79,5.4C8,4.5 9.5,4 11,4M7,10V12H15V10H7M1,1V8L8,1H1Z' />
  </Svg>
)

MagnifyMinusCursorIcon.displayName = 'MagnifyMinusCursorIcon'

MagnifyMinusCursorIcon.defaultProps = {
  size: 24
}

export default MagnifyMinusCursorIcon