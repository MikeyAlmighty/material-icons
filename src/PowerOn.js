import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PowerOnIcon = ({
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
    <path d='M11,3H13V21H11V3Z' />
  </Svg>
)

PowerOnIcon.displayName = 'PowerOnIcon'

PowerOnIcon.defaultProps = {
  size: 24
}

export default PowerOnIcon