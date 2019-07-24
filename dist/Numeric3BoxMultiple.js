import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric3BoxMultipleIcon = ({
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
    <path d='M3,5V21H19V23H3C1.9,23 1,22.1 1,21V5H3M17,13V11.5C17,10.67 16.33,10 15.5,10C16.33,10 17,9.33 17,8.5V7C17,5.89 16.1,5 15,5H11V7H15V9H13V11H15V13H11V15H15C16.1,15 17,14.1 17,13M21,1C22.1,1 23,1.9 23,3V17C23,18.1 22.1,19 21,19H7C5.9,19 5,18.1 5,17V3C5,1.9 5.9,1 7,1H21Z' />
  </Svg>
)

Numeric3BoxMultipleIcon.displayName = 'Numeric3BoxMultipleIcon'

Numeric3BoxMultipleIcon.defaultProps = {
  size: 24
}

export default Numeric3BoxMultipleIcon