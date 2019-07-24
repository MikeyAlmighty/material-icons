import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatTextdirectionLToRIcon = ({
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
    <path d='M21,18L17,14V17H5V19H17V22M9,10V15H11V4H13V15H15V4H17V2H9C6.79,2 5,3.79 5,6C5,8.21 6.79,10 9,10Z' />
  </Svg>
)

FormatTextdirectionLToRIcon.displayName = 'FormatTextdirectionLToRIcon'

FormatTextdirectionLToRIcon.defaultProps = {
  size: 24
}

export default FormatTextdirectionLToRIcon