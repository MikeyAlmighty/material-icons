import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VideoImageIcon = ({
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
    <path d='M17,10.5L21,6.5V17.5L17,13.5V17C17,17.55 16.55,18 16,18H4C3.45,18 3,17.55 3,17V7C3,6.45 3.45,6 4,6H16C16.55,6 17,6.45 17,7V10.5M10.91,9.55L9.2,11.82L10.5,13.55L9.77,14.09L7.73,11.36L5,15H15L10.91,9.55Z' />
  </Svg>
)

VideoImageIcon.displayName = 'VideoImageIcon'

VideoImageIcon.defaultProps = {
  size: 24
}

export default VideoImageIcon