import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatTextdirectionRToLIcon = ({
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
    <path d='M8,17V14L4,18L8,22V19H20V17M10,10V15H12V4H14V15H16V4H18V2H10C7.79,2 6,3.79 6,6C6,8.21 7.79,10 10,10Z' />
  </Svg>
)

FormatTextdirectionRToLIcon.displayName = 'FormatTextdirectionRToLIcon'

FormatTextdirectionRToLIcon.defaultProps = {
  size: 24
}

export default FormatTextdirectionRToLIcon