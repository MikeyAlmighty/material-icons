import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowDownBoldIcon = ({
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
    <path d='M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z' />
  </Svg>
)

ArrowDownBoldIcon.displayName = 'ArrowDownBoldIcon'

ArrowDownBoldIcon.defaultProps = {
  size: 24
}

export default ArrowDownBoldIcon