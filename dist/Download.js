import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DownloadIcon = ({
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
    <path d='M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z' />
  </Svg>
)

DownloadIcon.displayName = 'DownloadIcon'

DownloadIcon.defaultProps = {
  size: 24
}

export default DownloadIcon