import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderPoundOutlineIcon = ({
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
    <path d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V8C22,6.89 21.1,6 20,6M19,12V11H17.5L18,9H17L16.5,11H14.5L15,9H14L13.5,11H12V12H13.25L12.75,14H11V15H12.5L12,17H13L13.5,15H15.5L15,17H16L16.5,15H18V14H16.75L17.25,12H19M15.75,14H13.75L14.25,12H16.25L15.75,14Z' />
  </Svg>
)

FolderPoundOutlineIcon.displayName = 'FolderPoundOutlineIcon'

FolderPoundOutlineIcon.defaultProps = {
  size: 24
}

export default FolderPoundOutlineIcon