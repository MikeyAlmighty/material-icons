import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderKeyIcon = ({
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
    <path d='M4,4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V8C22,6.9 21.1,6 20,6H12L10,4M11,10C12.31,10 13.42,10.84 13.83,12H19V14H18V16H16V14H13.83C13.42,15.17 12.31,16 11,16C9.34,16 8,14.66 8,13C8,11.34 9.34,10 11,10M11,12C10.45,12 10,12.45 10,13C10,13.56 10.45,14 11,14C11.55,14 12,13.55 12,13C12,12.45 11.55,12 11,12Z' />
  </Svg>
)

FolderKeyIcon.displayName = 'FolderKeyIcon'

FolderKeyIcon.defaultProps = {
  size: 24
}

export default FolderKeyIcon