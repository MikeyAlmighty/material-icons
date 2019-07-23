import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowDownBoldOutlineIcon = ({
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
    <path d='M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z' />
  </Svg>
)

ArrowDownBoldOutlineIcon.displayName = 'ArrowDownBoldOutlineIcon'

ArrowDownBoldOutlineIcon.defaultProps = {
  size: 24
}

export default ArrowDownBoldOutlineIcon