import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlattrIcon = ({
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
    <path d='M21,12C21,16.97 16.97,21 12,21H4.5L9.74,15.76L11.16,17.17L9.33,19H12C15.87,19 19,15.87 19,12V7L21,5V12M3,12C3,7.03 7.03,3 12,3H19.5L14.26,8.24L12.84,6.83L14.67,5H12C8.13,5 5,8.13 5,12V17L3,19V12Z' />
  </Svg>
)

FlattrIcon.displayName = 'FlattrIcon'

FlattrIcon.defaultProps = {
  size: 24
}

export default FlattrIcon