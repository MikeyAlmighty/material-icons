import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ReorderHorizontalIcon = ({
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
    <path d='M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z' />
  </Svg>
)

ReorderHorizontalIcon.displayName = 'ReorderHorizontalIcon'

ReorderHorizontalIcon.defaultProps = {
  size: 24
}

export default ReorderHorizontalIcon