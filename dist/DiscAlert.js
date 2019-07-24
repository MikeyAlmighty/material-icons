import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DiscAlertIcon = ({
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
    <path d='M10,14C8.89,14 8,13.1 8,12C8,10.89 8.89,10 10,10C11.1,10 12,10.9 12,12C12,13.1 11.1,14 10,14M10,4C5.58,4 2,7.58 2,12C2,16.42 5.58,20 10,20C14.42,20 18,16.42 18,12C18,7.58 14.42,4 10,4M20,12H22V7H20M20,16H22V14H20V16Z' />
  </Svg>
)

DiscAlertIcon.displayName = 'DiscAlertIcon'

DiscAlertIcon.defaultProps = {
  size: 24
}

export default DiscAlertIcon