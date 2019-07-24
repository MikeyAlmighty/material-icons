import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GlassStangeIcon = ({
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
    <path d='M8,2H16V22H8V2M10,4V7H14V4H10Z' />
  </Svg>
)

GlassStangeIcon.displayName = 'GlassStangeIcon'

GlassStangeIcon.defaultProps = {
  size: 24
}

export default GlassStangeIcon