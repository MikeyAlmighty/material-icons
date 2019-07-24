import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const XboxControllerMenuIcon = ({
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
    <path d='M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M6,7H18V9H6V7M6,11H18V13H6V11M6,15H18V17H6V15Z' />
  </Svg>
)

XboxControllerMenuIcon.displayName = 'XboxControllerMenuIcon'

XboxControllerMenuIcon.defaultProps = {
  size: 24
}

export default XboxControllerMenuIcon