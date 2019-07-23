import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileDocumentIcon = ({
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
    <path d='M13,9H18.5L13,3.5V9M6,2H14L20,8V20C20,21.1 19.1,22 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z' />
  </Svg>
)

FileDocumentIcon.displayName = 'FileDocumentIcon'

FileDocumentIcon.defaultProps = {
  size: 24
}

export default FileDocumentIcon