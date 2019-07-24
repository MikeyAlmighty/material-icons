import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatItalicIcon = ({
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
    <path d='M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z' />
  </Svg>
)

FormatItalicIcon.displayName = 'FormatItalicIcon'

FormatItalicIcon.defaultProps = {
  size: 24
}

export default FormatItalicIcon