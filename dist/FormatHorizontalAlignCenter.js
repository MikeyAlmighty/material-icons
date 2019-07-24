import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatHorizontalAlignCenterIcon = ({
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
    <path d='M19,16V13H23V11H19V8L15,12L19,16M5,8V11H1V13H5V16L9,12L5,8M11,20H13V4H11V20Z' />
  </Svg>
)

FormatHorizontalAlignCenterIcon.displayName = 'FormatHorizontalAlignCenterIcon'

FormatHorizontalAlignCenterIcon.defaultProps = {
  size: 24
}

export default FormatHorizontalAlignCenterIcon