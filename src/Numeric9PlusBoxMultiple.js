import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric9PlusBoxMultipleIcon = ({
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
    <path d='M11,9V8H12V9H11M21,1C22.1,1 23,1.9 23,3V17C23,18.1 22.1,19 21,19H7C5.9,19 5,18.1 5,17V3C5,1.9 5.9,1 7,1H21M3,5V21H19V23H3C1.9,23 1,22.1 1,21V5H3M15,9V11H17V13H19V11H21V9H19V7H17V9H15M14,12V8C14,6.89 13.1,6 12,6H11C9.9,6 9,6.9 9,8V9C9,10.11 9.9,11 11,11H12V12H9V14H12C13.1,14 14,13.1 14,12Z' />
  </Svg>
)

Numeric9PlusBoxMultipleIcon.displayName = 'Numeric9PlusBoxMultipleIcon'

Numeric9PlusBoxMultipleIcon.defaultProps = {
  size: 24
}

export default Numeric9PlusBoxMultipleIcon