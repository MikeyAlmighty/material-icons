import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatPageBreakIcon = ({
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
    <path d='M18,20H6V18H4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V18H18V20M14,2H6C4.9,2 4,2.9 4,4V12H6V4H14V8H18V12H20V8L14,2M11,16H8V14H11V16M16,16H13V14H16V16M3,14H6V16H3V14M21,16H18V14H21V16Z' />
  </Svg>
)

FormatPageBreakIcon.displayName = 'FormatPageBreakIcon'

FormatPageBreakIcon.defaultProps = {
  size: 24
}

export default FormatPageBreakIcon