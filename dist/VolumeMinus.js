import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VolumeMinusIcon = ({
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
    <path d='M3,9H7L12,4V20L7,15H3V9M14,11H22V13H14V11Z' />
  </Svg>
)

VolumeMinusIcon.displayName = 'VolumeMinusIcon'

VolumeMinusIcon.defaultProps = {
  size: 24
}

export default VolumeMinusIcon