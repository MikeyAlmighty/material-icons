import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileCheckOutlineIcon = ({
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
    <path d='M14,2L20,8V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2H14M18,20V9H13V4H6V20H18M11.2,18.46L8.45,15.46L9.61,14.3L11.2,15.88L14.78,12.3L15.95,13.71L11.2,18.46Z' />
  </Svg>
)

FileCheckOutlineIcon.displayName = 'FileCheckOutlineIcon'

FileCheckOutlineIcon.defaultProps = {
  size: 24
}

export default FileCheckOutlineIcon