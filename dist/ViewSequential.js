import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewSequentialIcon = ({
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
    <path d='M3,4H21V8H3V4M3,10H21V14H3V10M3,16H21V20H3V16Z' />
  </Svg>
)

ViewSequentialIcon.displayName = 'ViewSequentialIcon'

ViewSequentialIcon.defaultProps = {
  size: 24
}

export default ViewSequentialIcon