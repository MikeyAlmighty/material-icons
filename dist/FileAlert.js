import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileAlertIcon = ({
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
    <path d='M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M10,18H8V16H10V18M10,14H8V9H10V14M13,9V3.5L18.5,9H13Z' />
  </Svg>
)

FileAlertIcon.displayName = 'FileAlertIcon'

FileAlertIcon.defaultProps = {
  size: 24
}

export default FileAlertIcon