import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowBottomLeftIcon = ({
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
    <path d='M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z' />
  </Svg>
)

ArrowBottomLeftIcon.displayName = 'ArrowBottomLeftIcon'

ArrowBottomLeftIcon.defaultProps = {
  size: 24
}

export default ArrowBottomLeftIcon