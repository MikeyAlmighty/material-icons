import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileDocumentBoxMultipleOutlineIcon = ({
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
    <path d='M16,15H9V13H16V15M19,11H9V9H19V11M19,7H9V5H19V7M3,5V21H19V23H3C1.9,23 1,22.1 1,21V5H3M21,1C22.1,1 23,1.9 23,3V17C23,18.11 22.11,19 21,19H7C5.9,19 5,18.1 5,17V3C5,1.89 5.89,1 7,1H21M7,3V17H21V3H7Z' />
  </Svg>
)

FileDocumentBoxMultipleOutlineIcon.displayName = 'FileDocumentBoxMultipleOutlineIcon'

FileDocumentBoxMultipleOutlineIcon.defaultProps = {
  size: 24
}

export default FileDocumentBoxMultipleOutlineIcon