import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WrapDisabledIcon = ({
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
    <path d='M16,7H3V5H16V7M3,19H16V17H3V19M22,12L18,9V11H3V13H18V15L22,12Z' />
  </Svg>
)

WrapDisabledIcon.displayName = 'WrapDisabledIcon'

WrapDisabledIcon.defaultProps = {
  size: 24
}

export default WrapDisabledIcon