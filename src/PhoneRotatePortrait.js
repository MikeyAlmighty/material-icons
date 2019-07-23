import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PhoneRotatePortraitIcon = ({
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
    <path d='M9,1H3C1.9,1 1,1.9 1,3V16C1,17.1 1.9,18 3,18H4V15H3V3H9V11H11V3C11,1.9 10.1,1 9,1M23,21V15C23,13.9 22.1,13 21,13H8C6.9,13 6,13.9 6,15V21C6,22.1 6.9,23 8,23H21C22.1,23 23,22.1 23,21M9,21V15H21V21H9M23,10H21.5C21.5,7 19.69,4.27 16.92,3.09L16,5L14,1C18.97,1 23,5.03 23,10Z' />
  </Svg>
)

PhoneRotatePortraitIcon.displayName = 'PhoneRotatePortraitIcon'

PhoneRotatePortraitIcon.defaultProps = {
  size: 24
}

export default PhoneRotatePortraitIcon