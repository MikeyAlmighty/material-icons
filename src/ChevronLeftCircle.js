import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChevronLeftCircleIcon = ({
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
    <path d='M22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z' />
  </Svg>
)

ChevronLeftCircleIcon.displayName = 'ChevronLeftCircleIcon'

ChevronLeftCircleIcon.defaultProps = {
  size: 24
}

export default ChevronLeftCircleIcon