import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewCarouselIcon = ({
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
    <path d='M18,6V17H22V6M2,17H6V6H2M7,19H17V4H7V19Z' />
  </Svg>
)

ViewCarouselIcon.displayName = 'ViewCarouselIcon'

ViewCarouselIcon.defaultProps = {
  size: 24
}

export default ViewCarouselIcon