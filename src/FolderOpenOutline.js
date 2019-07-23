import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderOpenOutlineIcon = ({
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
    <path d='M6.1,10L4,18V8H21C21,6.9 20.1,6 19,6H12L10,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H19C19.9,20 20.7,19.4 20.9,18.5L23.2,10H6.1M19,18H6L7.6,12H20.6L19,18Z' />
  </Svg>
)

FolderOpenOutlineIcon.displayName = 'FolderOpenOutlineIcon'

FolderOpenOutlineIcon.defaultProps = {
  size: 24
}

export default FolderOpenOutlineIcon