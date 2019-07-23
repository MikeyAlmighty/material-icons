import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaDBoxOutlineIcon = ({
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
    <path d='M9,7H13C14.1,7 15,7.9 15,9V15C15,16.1 14.1,17 13,17H9V7M11,9V15H13V9H11M3,5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5Z' />
  </Svg>
)

AlphaDBoxOutlineIcon.displayName = 'AlphaDBoxOutlineIcon'

AlphaDBoxOutlineIcon.defaultProps = {
  size: 24
}

export default AlphaDBoxOutlineIcon