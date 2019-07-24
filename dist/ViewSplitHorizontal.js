import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewSplitHorizontalIcon = ({
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
    <path d='M3,5H21V7H3V5M3,11V9H21V11H3M3,19V13H21V19H3Z' />
  </Svg>
)

ViewSplitHorizontalIcon.displayName = 'ViewSplitHorizontalIcon'

ViewSplitHorizontalIcon.defaultProps = {
  size: 24
}

export default ViewSplitHorizontalIcon