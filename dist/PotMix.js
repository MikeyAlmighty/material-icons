import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PotMixIcon = ({
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
    <path d='M19,19C19,20.1 18.1,21 17,21H7C5.9,21 5,20.1 5,19V13H3V10H14L18,3.07L19.73,4.07L16.31,10H21V13H19V19Z' />
  </Svg>
)

PotMixIcon.displayName = 'PotMixIcon'

PotMixIcon.defaultProps = {
  size: 24
}

export default PotMixIcon