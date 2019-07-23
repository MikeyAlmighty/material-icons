import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VideoOutlineIcon = ({
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
    <path d='M15,8V16H5V8H15M16,6H4C3.45,6 3,6.45 3,7V17C3,17.55 3.45,18 4,18H16C16.55,18 17,17.55 17,17V13.5L21,17.5V6.5L17,10.5V7C17,6.45 16.55,6 16,6Z' />
  </Svg>
)

VideoOutlineIcon.displayName = 'VideoOutlineIcon'

VideoOutlineIcon.defaultProps = {
  size: 24
}

export default VideoOutlineIcon