import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CropSquareIcon = ({
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
    <path d='M18,18H6V6H18M18,4H6C4.9,4 4,4.9 4,6V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18V6C20,4.89 19.1,4 18,4Z' />
  </Svg>
)

CropSquareIcon.displayName = 'CropSquareIcon'

CropSquareIcon.defaultProps = {
  size: 24
}

export default CropSquareIcon