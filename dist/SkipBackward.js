import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SkipBackwardIcon = ({
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
    <path d='M20,5V19L13,12M6,5V19H4V5M13,5V19L6,12' />
  </Svg>
)

SkipBackwardIcon.displayName = 'SkipBackwardIcon'

SkipBackwardIcon.defaultProps = {
  size: 24
}

export default SkipBackwardIcon