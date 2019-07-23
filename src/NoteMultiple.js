import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NoteMultipleIcon = ({
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
    <path d='M16,9H21.5L16,3.5V9M7,2H17L23,8V18C23,19.1 22.1,20 21,20H7C5.89,20 5,19.1 5,18V4C5,2.9 5.9,2 7,2M3,6V22H21V24H3C1.9,24 1,23.1 1,22V6H3Z' />
  </Svg>
)

NoteMultipleIcon.displayName = 'NoteMultipleIcon'

NoteMultipleIcon.defaultProps = {
  size: 24
}

export default NoteMultipleIcon