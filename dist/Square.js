import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SquareIcon = ({
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
    <path d='M3,3V21H21V3' />
  </Svg>
)

SquareIcon.displayName = 'SquareIcon'

SquareIcon.defaultProps = {
  size: 24
}

export default SquareIcon