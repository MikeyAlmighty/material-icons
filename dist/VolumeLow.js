import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VolumeLowIcon = ({
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
    <path d='M7,9V15H11L16,20V4L11,9H7Z' />
  </Svg>
)

VolumeLowIcon.displayName = 'VolumeLowIcon'

VolumeLowIcon.defaultProps = {
  size: 24
}

export default VolumeLowIcon