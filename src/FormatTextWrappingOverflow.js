import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatTextWrappingOverflowIcon = ({
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
    <path d='M7,21H5V3H7V21M14,3H12V9H14V3M14,15H12V21H14V15M19,12L16,9V11H9V13H16V15L19,12Z' />
  </Svg>
)

FormatTextWrappingOverflowIcon.displayName = 'FormatTextWrappingOverflowIcon'

FormatTextWrappingOverflowIcon.defaultProps = {
  size: 24
}

export default FormatTextWrappingOverflowIcon