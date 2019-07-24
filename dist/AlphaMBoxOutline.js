import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaMBoxOutlineIcon = ({
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
    <path d='M9,7H15C16.1,7 17,7.9 17,9V17H15V9H13V16H11V9H9V17H7V9C7,7.9 7.9,7 9,7M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M5,5V19H19V5H5Z' />
  </Svg>
)

AlphaMBoxOutlineIcon.displayName = 'AlphaMBoxOutlineIcon'

AlphaMBoxOutlineIcon.defaultProps = {
  size: 24
}

export default AlphaMBoxOutlineIcon