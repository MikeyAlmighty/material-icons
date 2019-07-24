import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FloorLampIcon = ({
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
    <path d='M15,2L17,9H7L9,2M11,10H13V20H16V22H8V20H11V10Z' />
  </Svg>
)

FloorLampIcon.displayName = 'FloorLampIcon'

FloorLampIcon.defaultProps = {
  size: 24
}

export default FloorLampIcon