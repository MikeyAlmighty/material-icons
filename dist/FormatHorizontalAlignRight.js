import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatHorizontalAlignRightIcon = ({
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
    <path d='M13,8V11H3V13H13V16L17,12L13,8M19,20H21V4H19V20Z' />
  </Svg>
)

FormatHorizontalAlignRightIcon.displayName = 'FormatHorizontalAlignRightIcon'

FormatHorizontalAlignRightIcon.defaultProps = {
  size: 24
}

export default FormatHorizontalAlignRightIcon