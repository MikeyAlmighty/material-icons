import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MusicNoteOffIcon = ({
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
    <path d='M12,3V8.68L15,11.68V6H19V3H12M5.28,4.5L4,5.77L10.26,12.03C7.89,12.15 6,14.1 6,16.5C6,19 8,21 10.5,21C12.9,21 14.85,19.11 14.97,16.74L19.68,21.45L20.96,20.18L15,14.22L12,11.22L5.28,4.5Z' />
  </Svg>
)

MusicNoteOffIcon.displayName = 'MusicNoteOffIcon'

MusicNoteOffIcon.defaultProps = {
  size: 24
}

export default MusicNoteOffIcon