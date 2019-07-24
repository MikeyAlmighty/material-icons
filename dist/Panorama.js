import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PanoramaIcon = ({
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
    <path d='M8.5,12.5L11,15.5L14.5,11L19,17H5M23,18V6C23,4.9 22.1,4 21,4H3C1.9,4 1,4.9 1,6V18C1,19.1 1.9,20 3,20H21C22.1,20 23,19.1 23,18Z' />
  </Svg>
)

PanoramaIcon.displayName = 'PanoramaIcon'

PanoramaIcon.defaultProps = {
  size: 24
}

export default PanoramaIcon