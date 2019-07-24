import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowBottomRightIcon = ({
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
    <path d='M5,6.41L6.41,5L17,15.59V9H19V19H9V17H15.59L5,6.41Z' />
  </Svg>
)

ArrowBottomRightIcon.displayName = 'ArrowBottomRightIcon'

ArrowBottomRightIcon.defaultProps = {
  size: 24
}

export default ArrowBottomRightIcon