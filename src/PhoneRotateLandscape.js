import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PhoneRotateLandscapeIcon = ({
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
    <path d='M9,1H3C1.9,1 1,1.9 1,3V16C1,17.1 1.9,18 3,18H9C10.1,18 11,17.1 11,16V3C11,1.9 10.1,1 9,1M9,15H3V3H9V15M21,13H13V15H21V21H9V20H6V21C6,22.1 6.9,23 8,23H21C22.1,23 23,22.1 23,21V15C23,13.9 22.1,13 21,13M23,10L19,8L20.91,7.09C19.74,4.31 17,2.5 14,2.5V1C18.97,1 23,5.03 23,10Z' />
  </Svg>
)

PhoneRotateLandscapeIcon.displayName = 'PhoneRotateLandscapeIcon'

PhoneRotateLandscapeIcon.defaultProps = {
  size: 24
}

export default PhoneRotateLandscapeIcon