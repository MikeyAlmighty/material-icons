import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewArrayIcon = ({
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
    <path d='M8,18H17V5H8M18,5V18H21V5M4,18H7V5H4V18Z' />
  </Svg>
)

ViewArrayIcon.displayName = 'ViewArrayIcon'

ViewArrayIcon.defaultProps = {
  size: 24
}

export default ViewArrayIcon