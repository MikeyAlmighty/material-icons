import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatStrikethroughIcon = ({
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
    <path d='M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z' />
  </Svg>
)

FormatStrikethroughIcon.displayName = 'FormatStrikethroughIcon'

FormatStrikethroughIcon.defaultProps = {
  size: 24
}

export default FormatStrikethroughIcon