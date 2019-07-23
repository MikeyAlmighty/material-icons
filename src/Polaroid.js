import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PolaroidIcon = ({
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
    <path d='M6,3H18C19.1,3 20,3.9 20,5V19C20,20.1 19.1,21 18,21H6C4.9,21 4,20.1 4,19V5C4,3.9 4.9,3 6,3M6,5V17H18V5H6Z' />
  </Svg>
)

PolaroidIcon.displayName = 'PolaroidIcon'

PolaroidIcon.defaultProps = {
  size: 24
}

export default PolaroidIcon