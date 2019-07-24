import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatVerticalAlignBottomIcon = ({
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
    <path d='M16,13H13V3H11V13H8L12,17L16,13M4,19V21H20V19H4Z' />
  </Svg>
)

FormatVerticalAlignBottomIcon.displayName = 'FormatVerticalAlignBottomIcon'

FormatVerticalAlignBottomIcon.defaultProps = {
  size: 24
}

export default FormatVerticalAlignBottomIcon