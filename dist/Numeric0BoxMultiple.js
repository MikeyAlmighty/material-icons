import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric0BoxMultipleIcon = ({
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
    <path d='M3,5V21H19V23H3C1.9,23 1,22.1 1,21V5H3M21,1C22.1,1 23,1.9 23,3V17C23,18.1 22.1,19 21,19H7C5.9,19 5,18.1 5,17V3C5,1.9 5.9,1 7,1H21M13,5C11.9,5 11,5.9 11,7V13C11,14.1 11.9,15 13,15H15C16.1,15 17,14.1 17,13V7C17,5.9 16.1,5 15,5H13M13,7H15V13H13V7Z' />
  </Svg>
)

Numeric0BoxMultipleIcon.displayName = 'Numeric0BoxMultipleIcon'

Numeric0BoxMultipleIcon.defaultProps = {
  size: 24
}

export default Numeric0BoxMultipleIcon