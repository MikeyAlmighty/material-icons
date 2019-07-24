import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric9BoxOutlineIcon = ({
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
    <path d='M13,11H11V9H13M13,7H11C9.9,7 9,7.9 9,9V11C9,12.11 9.9,13 11,13H13V15H9V17H13C14.1,17 15,16.1 15,15V9C15,7.89 14.1,7 13,7M19,19H5V5H19M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z' />
  </Svg>
)

Numeric9BoxOutlineIcon.displayName = 'Numeric9BoxOutlineIcon'

Numeric9BoxOutlineIcon.defaultProps = {
  size: 24
}

export default Numeric9BoxOutlineIcon