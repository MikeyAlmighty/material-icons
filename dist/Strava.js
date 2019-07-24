import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StravaIcon = ({
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
    <path d='M14.92,17.16L16.75,13.53H19.45L14.94,22.5L10.37,13.53H13.07L14.92,17.16M10.63,8.66L8.18,13.55H4.55L10.61,1.5L16.74,13.55H13.11L10.63,8.66Z' />
  </Svg>
)

StravaIcon.displayName = 'StravaIcon'

StravaIcon.defaultProps = {
  size: 24
}

export default StravaIcon