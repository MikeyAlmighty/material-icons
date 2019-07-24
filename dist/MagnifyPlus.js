import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MagnifyPlusIcon = ({
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
    <path d='M9,2C12.87,2 16,5.13 16,9C16,10.57 15.5,12 14.61,13.19L15.41,14H16L22,20L20,22L14,16V15.41L13.19,14.61C12,15.5 10.57,16 9,16C5.13,16 2,12.87 2,9C2,5.13 5.13,2 9,2M8,5V8H5V10H8V13H10V10H13V8H10V5H8Z' />
  </Svg>
)

MagnifyPlusIcon.displayName = 'MagnifyPlusIcon'

MagnifyPlusIcon.defaultProps = {
  size: 24
}

export default MagnifyPlusIcon