import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BagPersonalIcon = ({
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
    <path d='M16,5V4C16,2.9 15.1,2 14,2H10C8.9,2 8,2.9 8,4V5C5.79,5 4,6.79 4,9V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V9C20,6.79 18.21,5 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,16H9V18H8V16H6V15H18V16Z' />
  </Svg>
)

BagPersonalIcon.displayName = 'BagPersonalIcon'

BagPersonalIcon.defaultProps = {
  size: 24
}

export default BagPersonalIcon