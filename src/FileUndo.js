import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileUndoIcon = ({
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
    <path d='M13,9H18.5L13,3.5V9M6,2H14L20,8V20C20,21.1 19.1,22 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M12.16,14.31C10.6,14.31 9.19,14.89 8.11,15.83L6,13.72V19H11.28L9.15,16.88C9.97,16.2 11,15.78 12.16,15.78C14.23,15.78 16,17.13 16.61,19L18,18.54C17.19,16.09 14.88,14.31 12.16,14.31Z' />
  </Svg>
)

FileUndoIcon.displayName = 'FileUndoIcon'

FileUndoIcon.defaultProps = {
  size: 24
}

export default FileUndoIcon