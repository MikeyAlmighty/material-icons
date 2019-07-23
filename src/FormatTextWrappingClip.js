import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatTextWrappingClipIcon = ({
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
    <path d='M7,21H5V3H7V21M17,3V11H9V13H17V21H19V3H17Z' />
  </Svg>
)

FormatTextWrappingClipIcon.displayName = 'FormatTextWrappingClipIcon'

FormatTextWrappingClipIcon.defaultProps = {
  size: 24
}

export default FormatTextWrappingClipIcon