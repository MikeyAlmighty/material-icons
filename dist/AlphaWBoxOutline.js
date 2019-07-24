import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaWBoxOutlineIcon = ({
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
    <path d='M9,17C7.9,17 7,16.1 7,15V7H9V15H11V8H13V15H15V7H17V15C17,16.1 16.1,17 15,17H9M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M5,5V19H19V5H5Z' />
  </Svg>
)

AlphaWBoxOutlineIcon.displayName = 'AlphaWBoxOutlineIcon'

AlphaWBoxOutlineIcon.defaultProps = {
  size: 24
}

export default AlphaWBoxOutlineIcon