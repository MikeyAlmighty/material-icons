import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ScatterPlotIcon = ({
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
    <path d='M7,11C8.66,11 10,12.34 10,14C10,15.66 8.66,17 7,17C5.34,17 4,15.66 4,14C4,12.34 5.34,11 7,11M11,3C12.66,3 14,4.34 14,6C14,7.66 12.66,9 11,9C9.34,9 8,7.66 8,6C8,4.34 9.34,3 11,3M16.6,14.6C18.25,14.6 19.6,15.94 19.6,17.6C19.6,19.26 18.26,20.6 16.6,20.6C14.94,20.6 13.6,19.25 13.6,17.6C13.6,15.94 14.94,14.6 16.6,14.6Z' />
  </Svg>
)

ScatterPlotIcon.displayName = 'ScatterPlotIcon'

ScatterPlotIcon.defaultProps = {
  size: 24
}

export default ScatterPlotIcon