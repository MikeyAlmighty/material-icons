import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SegmentIcon = ({
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
    <path d='M21,8H3V6H21M9,13H21V11H9M9,18H21V16H9' />
  </Svg>
)

SegmentIcon.displayName = 'SegmentIcon'

SegmentIcon.defaultProps = {
  size: 24
}

export default SegmentIcon