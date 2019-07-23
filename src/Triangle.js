import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TriangleIcon = ({
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
    <path d='M1,21H23L12,2' />
  </Svg>
)

TriangleIcon.displayName = 'TriangleIcon'

TriangleIcon.defaultProps = {
  size: 24
}

export default TriangleIcon