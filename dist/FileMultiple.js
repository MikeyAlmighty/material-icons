import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileMultipleIcon = ({
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
    <path d='M15,7H20.5L15,1.5V7M8,0H16L22,6V18C22,19.1 21.1,20 20,20H8C6.89,20 6,19.1 6,18V2C6,0.9 6.9,0 8,0M4,4V22H20V24H4C2.9,24 2,23.1 2,22V4H4Z' />
  </Svg>
)

FileMultipleIcon.displayName = 'FileMultipleIcon'

FileMultipleIcon.defaultProps = {
  size: 24
}

export default FileMultipleIcon