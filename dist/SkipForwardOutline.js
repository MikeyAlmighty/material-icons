import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SkipForwardOutlineIcon = ({
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
    <path d='M6,9.83L8.17,12L6,14.17V9.83M4,5V19L11,12M20,5H18V19H20M13,9.83L15.17,12L13,14.17V9.83M11,5V19L18,12' />
  </Svg>
)

SkipForwardOutlineIcon.displayName = 'SkipForwardOutlineIcon'

SkipForwardOutlineIcon.defaultProps = {
  size: 24
}

export default SkipForwardOutlineIcon