import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatHorizontalAlignLeftIcon = ({
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
    <path d='M11,16V13H21V11H11V8L7,12L11,16M3,20H5V4H3V20Z' />
  </Svg>
)

FormatHorizontalAlignLeftIcon.displayName = 'FormatHorizontalAlignLeftIcon'

FormatHorizontalAlignLeftIcon.defaultProps = {
  size: 24
}

export default FormatHorizontalAlignLeftIcon