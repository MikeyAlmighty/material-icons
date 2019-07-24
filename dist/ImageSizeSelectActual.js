import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ImageSizeSelectActualIcon = ({
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
    <path d='M21,3H3C2,3 1,4 1,5V19C1,20.1 1.9,21 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z' />
  </Svg>
)

ImageSizeSelectActualIcon.displayName = 'ImageSizeSelectActualIcon'

ImageSizeSelectActualIcon.defaultProps = {
  size: 24
}

export default ImageSizeSelectActualIcon