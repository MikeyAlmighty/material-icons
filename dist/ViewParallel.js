import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewParallelIcon = ({
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
    <path d='M4,21V3H8V21H4M10,21V3H14V21H10M16,21V3H20V21H16Z' />
  </Svg>
)

ViewParallelIcon.displayName = 'ViewParallelIcon'

ViewParallelIcon.defaultProps = {
  size: 24
}

export default ViewParallelIcon