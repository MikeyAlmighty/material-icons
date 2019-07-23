import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const UploadIcon = ({
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
    <path d='M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z' />
  </Svg>
)

UploadIcon.displayName = 'UploadIcon'

UploadIcon.defaultProps = {
  size: 24
}

export default UploadIcon