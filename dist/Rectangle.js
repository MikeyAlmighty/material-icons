import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RectangleIcon = ({
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
    <path d='M4,6V19H20V6H4Z' />
  </Svg>
)

RectangleIcon.displayName = 'RectangleIcon'

RectangleIcon.defaultProps = {
  size: 24
}

export default RectangleIcon