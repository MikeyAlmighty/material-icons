import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileAccountIcon = ({
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
    <path d='M13,9H18.5L13,3.5V9M6,2H14L20,8V20C20,21.1 19.1,22 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M14,20V19C14,17.67 11.33,17 10,17C8.67,17 6,17.67 6,19V20H14M10,12C8.9,12 8,12.9 8,14C8,15.1 8.9,16 10,16C11.1,16 12,15.1 12,14C12,12.9 11.1,12 10,12Z' />
  </Svg>
)

FileAccountIcon.displayName = 'FileAccountIcon'

FileAccountIcon.defaultProps = {
  size: 24
}

export default FileAccountIcon