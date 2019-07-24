import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LoadingIcon = ({
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
    <path d='M12,4V2C6.48,2 2,6.48 2,12H4C4,7.58 7.58,4 12,4Z' />
  </Svg>
)

LoadingIcon.displayName = 'LoadingIcon'

LoadingIcon.defaultProps = {
  size: 24
}

export default LoadingIcon