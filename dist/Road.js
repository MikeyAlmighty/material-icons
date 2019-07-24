import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RoadIcon = ({
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
    <path d='M11,16H13V20H11M11,10H13V14H11M11,4H13V8H11M4,22H20V2H4V22Z' />
  </Svg>
)

RoadIcon.displayName = 'RoadIcon'

RoadIcon.defaultProps = {
  size: 24
}

export default RoadIcon