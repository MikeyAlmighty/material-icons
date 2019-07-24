import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChartHistogramIcon = ({
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
    <path d='M3,3H5V13H9V7H13V11H17V15H21V21H3V3Z' />
  </Svg>
)

ChartHistogramIcon.displayName = 'ChartHistogramIcon'

ChartHistogramIcon.defaultProps = {
  size: 24
}

export default ChartHistogramIcon