import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatVerticalAlignTopIcon = ({
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
    <path d='M8,11H11V21H13V11H16L12,7L8,11M4,3V5H20V3H4Z' />
  </Svg>
)

FormatVerticalAlignTopIcon.displayName = 'FormatVerticalAlignTopIcon'

FormatVerticalAlignTopIcon.defaultProps = {
  size: 24
}

export default FormatVerticalAlignTopIcon