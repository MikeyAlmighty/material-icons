import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PlaylistMinusIcon = ({
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
    <path d='M2,16H10V14H2M12,14V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z' />
  </Svg>
)

PlaylistMinusIcon.displayName = 'PlaylistMinusIcon'

PlaylistMinusIcon.defaultProps = {
  size: 24
}

export default PlaylistMinusIcon