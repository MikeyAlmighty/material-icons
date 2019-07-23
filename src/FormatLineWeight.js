import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatLineWeightIcon = ({
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
    <path d='M3,17H21V15H3V17M3,20H21V19H3V20M3,13H21V10H3V13M3,4V8H21V4H3Z' />
  </Svg>
)

FormatLineWeightIcon.displayName = 'FormatLineWeightIcon'

FormatLineWeightIcon.defaultProps = {
  size: 24
}

export default FormatLineWeightIcon