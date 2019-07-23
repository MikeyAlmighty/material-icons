import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowLeftBoldIcon = ({
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
    <path d='M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z' />
  </Svg>
)

ArrowLeftBoldIcon.displayName = 'ArrowLeftBoldIcon'

ArrowLeftBoldIcon.defaultProps = {
  size: 24
}

export default ArrowLeftBoldIcon