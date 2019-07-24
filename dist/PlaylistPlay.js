import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PlaylistPlayIcon = ({
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
    <path d='M19,9H2V11H19V9M19,5H2V7H19V5M2,15H15V13H2V15M17,13V19L22,16L17,13Z' />
  </Svg>
)

PlaylistPlayIcon.displayName = 'PlaylistPlayIcon'

PlaylistPlayIcon.defaultProps = {
  size: 24
}

export default PlaylistPlayIcon