import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EqualizerIcon = ({
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
    <path d='M10,20H14V4H10V20M4,20H8V12H4V20M16,9V20H20V9H16Z' />
  </Svg>
)

EqualizerIcon.displayName = 'EqualizerIcon'

EqualizerIcon.defaultProps = {
  size: 24
}

export default EqualizerIcon