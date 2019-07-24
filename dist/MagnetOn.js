import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MagnetOnIcon = ({
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
    <path d='M3,7V13C3,17.97 7.03,22 12,22C16.97,22 21,17.97 21,13V7H17V13C17,15.76 14.76,18 12,18C9.24,18 7,15.76 7,13V7M17,5H21V2H17M3,5H7V2H3M13,1.5L9,9H11V14.5L15,7H13V1.5Z' />
  </Svg>
)

MagnetOnIcon.displayName = 'MagnetOnIcon'

MagnetOnIcon.defaultProps = {
  size: 24
}

export default MagnetOnIcon