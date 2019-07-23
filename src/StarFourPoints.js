import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StarFourPointsIcon = ({
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
    <path d='M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z' />
  </Svg>
)

StarFourPointsIcon.displayName = 'StarFourPointsIcon'

StarFourPointsIcon.defaultProps = {
  size: 24
}

export default StarFourPointsIcon