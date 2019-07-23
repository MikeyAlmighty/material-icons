import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowTopLeftIcon = ({
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
    <path d='M19,17.59L17.59,19L7,8.41V15H5V5H15V7H8.41L19,17.59Z' />
  </Svg>
)

ArrowTopLeftIcon.displayName = 'ArrowTopLeftIcon'

ArrowTopLeftIcon.defaultProps = {
  size: 24
}

export default ArrowTopLeftIcon