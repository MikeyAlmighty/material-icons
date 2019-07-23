import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaJCircleIcon = ({
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
    <path d='M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M13,7V15H11V14H9V15C9,16.1 9.9,17 11,17H13C14.1,17 15,16.1 15,15V7H13Z' />
  </Svg>
)

AlphaJCircleIcon.displayName = 'AlphaJCircleIcon'

AlphaJCircleIcon.defaultProps = {
  size: 24
}

export default AlphaJCircleIcon