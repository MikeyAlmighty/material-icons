import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderMultipleOutlineIcon = ({
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
    <path d='M22,4C23.1,4 24,4.9 24,6V16C24,17.1 23.1,18 22,18H6C4.9,18 4,17.1 4,16V4C4,2.9 4.9,2 6,2H12L14,4H22M2,6V20H20V22H2C0.9,22 0,21.1 0,20V11H0V6H2M6,6V16H22V6H6Z' />
  </Svg>
)

FolderMultipleOutlineIcon.displayName = 'FolderMultipleOutlineIcon'

FolderMultipleOutlineIcon.defaultProps = {
  size: 24
}

export default FolderMultipleOutlineIcon