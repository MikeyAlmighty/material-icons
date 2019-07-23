import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileExcelBoxIcon = ({
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
    <path d='M16.2,17H14.2L12,13.2L9.8,17H7.8L11,12L7.8,7H9.8L12,10.8L14.2,7H16.2L13,12M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z' />
  </Svg>
)

FileExcelBoxIcon.displayName = 'FileExcelBoxIcon'

FileExcelBoxIcon.defaultProps = {
  size: 24
}

export default FileExcelBoxIcon