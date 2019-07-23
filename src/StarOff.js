import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StarOffIcon = ({
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
    <path d='M2,5.27L3.28,4L20,20.72L18.73,22L17.05,20.31L12,17.27L5.82,21L7.45,13.97L2,9.24L5.66,8.93L2,5.27M12,2L14.81,8.62L22,9.24L16.54,13.97L16.77,14.95L9.56,7.74L12,2Z' />
  </Svg>
)

StarOffIcon.displayName = 'StarOffIcon'

StarOffIcon.defaultProps = {
  size: 24
}

export default StarOffIcon