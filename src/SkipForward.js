import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SkipForwardIcon = ({
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
    <path d='M4,5V19L11,12M18,5V19H20V5M11,5V19L18,12' />
  </Svg>
)

SkipForwardIcon.displayName = 'SkipForwardIcon'

SkipForwardIcon.defaultProps = {
  size: 24
}

export default SkipForwardIcon