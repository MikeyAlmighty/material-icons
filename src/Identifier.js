import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const IdentifierIcon = ({
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
    <path d='M6,18V8H8V18H6M6,4.5H8V6.5H6V4.5M17,4H19V18H17V17.75C17,17.75 15.67,18 15,18C12.24,18 10,15.76 10,13C10,10.24 12.24,8 15,8C15.67,8 17,8.25 17,8.25V4M17,10.25C17,10.25 15.67,10 15,10C13.34,10 12,11.34 12,13C12,14.66 13.34,16 15,16C15.67,16 17,15.75 17,15.75V10.25Z' />
  </Svg>
)

IdentifierIcon.displayName = 'IdentifierIcon'

IdentifierIcon.defaultProps = {
  size: 24
}

export default IdentifierIcon