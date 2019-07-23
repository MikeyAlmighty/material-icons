import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowLeftBoldOutlineIcon = ({
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
    <path d='M13,22L3,12L13,2V8H21V16H13V22M6,12L11,17V14H19V10H11V7L6,12Z' />
  </Svg>
)

ArrowLeftBoldOutlineIcon.displayName = 'ArrowLeftBoldOutlineIcon'

ArrowLeftBoldOutlineIcon.defaultProps = {
  size: 24
}

export default ArrowLeftBoldOutlineIcon