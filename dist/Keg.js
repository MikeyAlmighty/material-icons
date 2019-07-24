import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const KegIcon = ({
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
    <path d='M5,22V20H6V16H5V14H6V11H5V7H11V3H10V2H11L13,2H14V3H13V7H19V11H18V14H19V16H18V20H19V22H5M17,9C17,8.45 16.55,8 16,8H14C13.45,8 13,8.45 13,9C13,9.55 13.45,10 14,10H16C16.55,10 17,9.55 17,9Z' />
  </Svg>
)

KegIcon.displayName = 'KegIcon'

KegIcon.defaultProps = {
  size: 24
}

export default KegIcon