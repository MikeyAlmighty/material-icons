import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderRemoveOutlineIcon = ({
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
    <path d='M11.46,10.88L12.88,9.46L15,11.59L17.12,9.46L18.54,10.88L16.41,13L18.54,15.12L17.12,16.54L15,14.41L12.88,16.54L11.46,15.12L13.59,13L11.46,10.88M20,6C21.1,6 22,6.9 22,8V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H10L12,6H20M20,18V8H11.17L9.17,6H4V18H20Z' />
  </Svg>
)

FolderRemoveOutlineIcon.displayName = 'FolderRemoveOutlineIcon'

FolderRemoveOutlineIcon.defaultProps = {
  size: 24
}

export default FolderRemoveOutlineIcon