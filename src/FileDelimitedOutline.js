import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileDelimitedOutlineIcon = ({
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
    <path d='M14,2L20,8V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2H14M18,20V9H13V4H6V20H18M14,10V14C14,15 13,18 10.85,19.2L9.7,18.38C12,17 12.6,16 12.3,14H10V10H14Z' />
  </Svg>
)

FileDelimitedOutlineIcon.displayName = 'FileDelimitedOutlineIcon'

FileDelimitedOutlineIcon.defaultProps = {
  size: 24
}

export default FileDelimitedOutlineIcon