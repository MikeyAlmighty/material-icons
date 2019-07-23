import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PlaylistMusicIcon = ({
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
    <path d='M15,6H3V8H15V6M15,10H3V12H15V10M3,16H11V14H3V16M17,6V14.18C16.69,14.07 16.35,14 16,14C14.34,14 13,15.34 13,17C13,18.66 14.34,20 16,20C17.66,20 19,18.66 19,17V8H22V6H17Z' />
  </Svg>
)

PlaylistMusicIcon.displayName = 'PlaylistMusicIcon'

PlaylistMusicIcon.defaultProps = {
  size: 24
}

export default PlaylistMusicIcon