import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatWrapTopBottomIcon = ({
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
    <path d='M12,7L17,17H7L12,7M3,3H21V5H3V3M3,19H21V21H3V19Z' />
  </Svg>
)

FormatWrapTopBottomIcon.displayName = 'FormatWrapTopBottomIcon'

FormatWrapTopBottomIcon.defaultProps = {
  size: 24
}

export default FormatWrapTopBottomIcon