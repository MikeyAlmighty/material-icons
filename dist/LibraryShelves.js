import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LibraryShelvesIcon = ({
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
    <path d='M19.5,9V1.5H16.5V9H13.5V1.5H10.5V9H7.5V1.5H4.65V9H3V10.5H21V9H19.5M19.5,13.5H16.5V21H13.5V13.5H10.5V21H7.5V13.5H4.65V21H3V22.5H21V21H19.5V13.5Z' />
  </Svg>
)

LibraryShelvesIcon.displayName = 'LibraryShelvesIcon'

LibraryShelvesIcon.defaultProps = {
  size: 24
}

export default LibraryShelvesIcon