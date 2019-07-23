import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PlayPauseIcon = ({
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
    <path d='M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5' />
  </Svg>
)

PlayPauseIcon.displayName = 'PlayPauseIcon'

PlayPauseIcon.defaultProps = {
  size: 24
}

export default PlayPauseIcon