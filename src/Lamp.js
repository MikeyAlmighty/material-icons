import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LampIcon = ({
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
    <path d='M8,2H16L20,14H4L8,2M11,15H13V20H18V22H6V20H11V15Z' />
  </Svg>
)

LampIcon.displayName = 'LampIcon'

LampIcon.defaultProps = {
  size: 24
}

export default LampIcon