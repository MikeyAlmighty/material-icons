import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatTextRotationDownIcon = ({
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
    <path d='M6,19.73L3,16.73H5V4.27H7V16.73H9L6,19.73M14,9.38V13.13L19.03,11.25L14,9.38M21,12L10,16.73V14.67L12.19,13.73V8.77L10,7.83V5.77L21,10.5V12Z' />
  </Svg>
)

FormatTextRotationDownIcon.displayName = 'FormatTextRotationDownIcon'

FormatTextRotationDownIcon.defaultProps = {
  size: 24
}

export default FormatTextRotationDownIcon