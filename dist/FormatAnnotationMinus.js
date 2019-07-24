import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatAnnotationMinusIcon = ({
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
    <path d='M10.5,7H8.5L3,21H5.2L6.3,18H12.5L13.6,21H16L10.5,7M7.1,16L9.5,9.7L11.9,16H7.1M22,7H14V5H22V7Z' />
  </Svg>
)

FormatAnnotationMinusIcon.displayName = 'FormatAnnotationMinusIcon'

FormatAnnotationMinusIcon.defaultProps = {
  size: 24
}

export default FormatAnnotationMinusIcon