import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WindowMinimizeIcon = ({
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
    <path d='M20,14H4V10H20' />
  </Svg>
)

WindowMinimizeIcon.displayName = 'WindowMinimizeIcon'

WindowMinimizeIcon.defaultProps = {
  size: 24
}

export default WindowMinimizeIcon