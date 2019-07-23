import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowRightBoldCircleIcon = ({
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
    <path d='M2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12M17,12L12,7V10H8V14H12V17L17,12Z' />
  </Svg>
)

ArrowRightBoldCircleIcon.displayName = 'ArrowRightBoldCircleIcon'

ArrowRightBoldCircleIcon.defaultProps = {
  size: 24
}

export default ArrowRightBoldCircleIcon