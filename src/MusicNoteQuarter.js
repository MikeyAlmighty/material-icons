import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MusicNoteQuarterIcon = ({
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
    <path d='M12,3H15V15H19V18H14.72C14.1,19.74 12.46,21 10.5,21C8.54,21 6.9,19.74 6.28,18H3V15H6.28C6.9,13.26 8.54,12 10.5,12C11,12 11.5,12.09 12,12.26V3Z' />
  </Svg>
)

MusicNoteQuarterIcon.displayName = 'MusicNoteQuarterIcon'

MusicNoteQuarterIcon.defaultProps = {
  size: 24
}

export default MusicNoteQuarterIcon