import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatTitleIcon = ({
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
    <path d='M5,4V7H10.5V19H13.5V7H19V4H5Z' />
  </Svg>
)

FormatTitleIcon.displayName = 'FormatTitleIcon'

FormatTitleIcon.defaultProps = {
  size: 24
}

export default FormatTitleIcon