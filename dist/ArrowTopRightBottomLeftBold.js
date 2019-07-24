import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowTopRightBottomLeftBoldIcon = ({
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
    <path d='M18.17,8.66L21,11.5V3H12.5L15.34,5.83L5.83,15.34L3,12.5V21H11.5L8.66,18.17L18.17,8.66Z' />
  </Svg>
)

ArrowTopRightBottomLeftBoldIcon.displayName = 'ArrowTopRightBottomLeftBoldIcon'

ArrowTopRightBottomLeftBoldIcon.defaultProps = {
  size: 24
}

export default ArrowTopRightBottomLeftBoldIcon