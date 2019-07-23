import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NetworkStrengthOffIcon = ({
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
    <path d='M21,1L12.4,9.6L21,18.19M4.77,4.5L3.5,5.77L9.86,12.13L1,21H18.73L20.73,23L22,21.73' />
  </Svg>
)

NetworkStrengthOffIcon.displayName = 'NetworkStrengthOffIcon'

NetworkStrengthOffIcon.defaultProps = {
  size: 24
}

export default NetworkStrengthOffIcon