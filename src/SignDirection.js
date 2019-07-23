import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SignDirectionIcon = ({
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
    <path d='M11,12H3.5L6,9.5L3.5,7H11V3L12,2L13,3V7H18L20.5,9.5L18,12H13V20C14.1,20 15,20.9 15,22H9C9,20.9 9.9,20 11,20V12Z' />
  </Svg>
)

SignDirectionIcon.displayName = 'SignDirectionIcon'

SignDirectionIcon.defaultProps = {
  size: 24
}

export default SignDirectionIcon