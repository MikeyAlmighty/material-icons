import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VideoInputHdmiIcon = ({
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
    <path d='M18,7V4C18,2.9 17.1,2 16,2H8C6.9,2 6,2.9 6,4V7H5V13L8,19V22H16V19L19,13V7H18M8,4H16V7H14V5H13V7H11V5H10V7H8V4Z' />
  </Svg>
)

VideoInputHdmiIcon.displayName = 'VideoInputHdmiIcon'

VideoInputHdmiIcon.defaultProps = {
  size: 24
}

export default VideoInputHdmiIcon