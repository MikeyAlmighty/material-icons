import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaACircleOutlineIcon = ({
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
    <path d='M11,7H13C14.1,7 15,7.9 15,9V17H13V13H11V17H9V9C9,7.9 9.9,7 11,7M11,9V11H13V9H11M12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z' />
  </Svg>
)

AlphaACircleOutlineIcon.displayName = 'AlphaACircleOutlineIcon'

AlphaACircleOutlineIcon.defaultProps = {
  size: 24
}

export default AlphaACircleOutlineIcon