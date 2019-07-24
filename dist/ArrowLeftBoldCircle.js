import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowLeftBoldCircleIcon = ({
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
    <path d='M22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12M7,12L12,17V14H16V10H12V7L7,12Z' />
  </Svg>
)

ArrowLeftBoldCircleIcon.displayName = 'ArrowLeftBoldCircleIcon'

ArrowLeftBoldCircleIcon.defaultProps = {
  size: 24
}

export default ArrowLeftBoldCircleIcon