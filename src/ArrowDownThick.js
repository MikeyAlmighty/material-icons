import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowDownThickIcon = ({
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
    <path d='M10,4H14V13L17.5,9.5L19.92,11.92L12,19.84L4.08,11.92L6.5,9.5L10,13V4Z' />
  </Svg>
)

ArrowDownThickIcon.displayName = 'ArrowDownThickIcon'

ArrowDownThickIcon.defaultProps = {
  size: 24
}

export default ArrowDownThickIcon