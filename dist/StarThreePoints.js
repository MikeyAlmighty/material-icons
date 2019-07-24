import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StarThreePointsIcon = ({
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
    <path d='M12,2.6L9,12.4L2,19.9L12,17.6L22,20L15,12.5L12,2.6Z' />
  </Svg>
)

StarThreePointsIcon.displayName = 'StarThreePointsIcon'

StarThreePointsIcon.defaultProps = {
  size: 24
}

export default StarThreePointsIcon