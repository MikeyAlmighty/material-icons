import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SolidIcon = ({
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
    <path d='M0,0H24V24H0' />
  </Svg>
)

SolidIcon.displayName = 'SolidIcon'

SolidIcon.defaultProps = {
  size: 24
}

export default SolidIcon