import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlagMinusIcon = ({
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
    <path d='M12.4,5H18V15H11L10.6,13H5V20H3V3H12L12.4,5M14,17H22V19H14V17Z' />
  </Svg>
)

FlagMinusIcon.displayName = 'FlagMinusIcon'

FlagMinusIcon.defaultProps = {
  size: 24
}

export default FlagMinusIcon