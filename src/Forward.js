import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ForwardIcon = ({
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
    <path d='M12,8V4L20,12L12,20V16H4V8H12Z' />
  </Svg>
)

ForwardIcon.displayName = 'ForwardIcon'

ForwardIcon.defaultProps = {
  size: 24
}

export default ForwardIcon