import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileCheckIcon = ({
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
    <path d='M13,9H18.5L13,3.5V9M6,2H14L20,8V20C20,21.1 19.1,22 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11.2,18.46L15.95,13.71L14.78,12.3L11.2,15.88L9.61,14.3L8.45,15.46L11.2,18.46Z' />
  </Svg>
)

FileCheckIcon.displayName = 'FileCheckIcon'

FileCheckIcon.defaultProps = {
  size: 24
}

export default FileCheckIcon