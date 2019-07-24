import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderAccountIcon = ({
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
    <path d='M19,17H11V16C11,14.67 13.67,14 15,14C16.33,14 19,14.67 19,16M15,9C16.1,9 17,9.9 17,11C17,12.1 16.1,13 15,13C13.9,13 13,12.1 13,11C13,9.89 13.9,9 15,9M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V8C22,6.89 21.1,6 20,6Z' />
  </Svg>
)

FolderAccountIcon.displayName = 'FolderAccountIcon'

FolderAccountIcon.defaultProps = {
  size: 24
}

export default FolderAccountIcon