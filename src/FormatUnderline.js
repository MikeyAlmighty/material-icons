import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatUnderlineIcon = ({
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
    <path d='M5,21H19V19H5V21M12,17C15.31,17 18,14.31 18,11V3H15.5V11C15.5,12.93 13.93,14.5 12,14.5C10.07,14.5 8.5,12.93 8.5,11V3H6V11C6,14.31 8.69,17 12,17Z' />
  </Svg>
)

FormatUnderlineIcon.displayName = 'FormatUnderlineIcon'

FormatUnderlineIcon.defaultProps = {
  size: 24
}

export default FormatUnderlineIcon