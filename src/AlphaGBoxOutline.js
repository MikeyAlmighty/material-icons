import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaGBoxOutlineIcon = ({
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
    <path d='M11,7H15V9H11V15H13V11H15V15C15,16.1 14.1,17 13,17H11C9.9,17 9,16.1 9,15V9C9,7.9 9.9,7 11,7M3,5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5Z' />
  </Svg>
)

AlphaGBoxOutlineIcon.displayName = 'AlphaGBoxOutlineIcon'

AlphaGBoxOutlineIcon.defaultProps = {
  size: 24
}

export default AlphaGBoxOutlineIcon