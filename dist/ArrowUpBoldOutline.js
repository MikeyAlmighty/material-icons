import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowUpBoldOutlineIcon = ({
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
    <path d='M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z' />
  </Svg>
)

ArrowUpBoldOutlineIcon.displayName = 'ArrowUpBoldOutlineIcon'

ArrowUpBoldOutlineIcon.defaultProps = {
  size: 24
}

export default ArrowUpBoldOutlineIcon