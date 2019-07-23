import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowUpBoldIcon = ({
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
    <path d='M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z' />
  </Svg>
)

ArrowUpBoldIcon.displayName = 'ArrowUpBoldIcon'

ArrowUpBoldIcon.defaultProps = {
  size: 24
}

export default ArrowUpBoldIcon