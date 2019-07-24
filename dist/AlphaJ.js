import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaJIcon = ({
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
    <path d='M13,7V15H11V14H9V15C9,16.1 9.9,17 11,17H13C14.1,17 15,16.1 15,15V7H13Z' />
  </Svg>
)

AlphaJIcon.displayName = 'AlphaJIcon'

AlphaJIcon.defaultProps = {
  size: 24
}

export default AlphaJIcon