import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatFloatCenterIcon = ({
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
    <path d='M9,7H15V13H9V7M3,3H21V5H3V3M3,15H21V17H3V15M3,19H17V21H3V19Z' />
  </Svg>
)

FormatFloatCenterIcon.displayName = 'FormatFloatCenterIcon'

FormatFloatCenterIcon.defaultProps = {
  size: 24
}

export default FormatFloatCenterIcon