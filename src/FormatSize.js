import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatSizeIcon = ({
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
    <path d='M3,12H6V19H9V12H12V9H3M9,4V7H14V19H17V7H22V4H9Z' />
  </Svg>
)

FormatSizeIcon.displayName = 'FormatSizeIcon'

FormatSizeIcon.defaultProps = {
  size: 24
}

export default FormatSizeIcon