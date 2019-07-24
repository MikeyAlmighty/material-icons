import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StarThreePointsOutlineIcon = ({
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
    <path d='M12,9.5L13.2,13.5L16,16.5L12,15.6L7.9,16.5L10.7,13.5L12,9.5M12,2.6L9,12.4L2,19.9L12,17.6L22,20L15,12.5L12,2.6Z' />
  </Svg>
)

StarThreePointsOutlineIcon.displayName = 'StarThreePointsOutlineIcon'

StarThreePointsOutlineIcon.defaultProps = {
  size: 24
}

export default StarThreePointsOutlineIcon