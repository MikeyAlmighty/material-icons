import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DownloadMultipleIcon = ({
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
    <path d='M9,1V7H5L12,14L19,7H15V1H9M5,16V18H19V16H5M5,20V22H19V20H5Z' />
  </Svg>
)

DownloadMultipleIcon.displayName = 'DownloadMultipleIcon'

DownloadMultipleIcon.defaultProps = {
  size: 24
}

export default DownloadMultipleIcon