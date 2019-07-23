import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TrendingNeutralIcon = ({
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
    <path d='M22,12L18,8V11H3V13H18V16L22,12Z' />
  </Svg>
)

TrendingNeutralIcon.displayName = 'TrendingNeutralIcon'

TrendingNeutralIcon.defaultProps = {
  size: 24
}

export default TrendingNeutralIcon