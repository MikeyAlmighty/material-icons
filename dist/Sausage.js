import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SausageIcon = ({
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
    <path d='M3.5,3H9.5L7.96,5.32C9.16,5.87 10,7.09 10,8.5C10,11.54 12.46,14 15.5,14C16.91,14 18.13,14.84 18.68,16.04L21,14.5V20.5L18.68,18.96C18.13,20.16 16.91,21 15.5,21C8.6,21 3,15.4 3,8.5C3,7.09 3.84,5.87 5.04,5.32L3.5,3Z' />
  </Svg>
)

SausageIcon.displayName = 'SausageIcon'

SausageIcon.defaultProps = {
  size: 24
}

export default SausageIcon