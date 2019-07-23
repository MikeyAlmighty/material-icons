import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CropIcon = ({
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
    <path d='M7,17V1H5V5H1V7H5V17C5,18.1 5.9,19 7,19H17V23H19V19H23V17M17,15H19V7C19,5.89 18.1,5 17,5H9V7H17V15Z' />
  </Svg>
)

CropIcon.displayName = 'CropIcon'

CropIcon.defaultProps = {
  size: 24
}

export default CropIcon