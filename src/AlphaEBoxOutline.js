import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaEBoxOutlineIcon = ({
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
    <path d='M9,7H15V9H11V11H15V13H11V15H15V17H9V7M3,5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5Z' />
  </Svg>
)

AlphaEBoxOutlineIcon.displayName = 'AlphaEBoxOutlineIcon'

AlphaEBoxOutlineIcon.defaultProps = {
  size: 24
}

export default AlphaEBoxOutlineIcon