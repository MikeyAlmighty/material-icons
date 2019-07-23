import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LibraryVideoIcon = ({
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
    <path d='M4,6H2V20C2,21.1 2.9,22 4,22H18V20H4V6M20,2H8C6.9,2 6,2.9 6,4V16C6,17.1 6.9,18 8,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2M12,14.5V5.5L18,10L12,14.5Z' />
  </Svg>
)

LibraryVideoIcon.displayName = 'LibraryVideoIcon'

LibraryVideoIcon.defaultProps = {
  size: 24
}

export default LibraryVideoIcon