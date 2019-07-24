import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TabletAndroidIcon = ({
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
    <path d='M19.25,19H4.75V3H19.25M14,22H10V21H14M18,0H6C4.34,0 3,1.34 3,3V21C3,22.66 4.34,24 6,24H18C19.66,24 21,22.66 21,21V3C21,1.34 19.66,0 18,0Z' />
  </Svg>
)

TabletAndroidIcon.displayName = 'TabletAndroidIcon'

TabletAndroidIcon.defaultProps = {
  size: 24
}

export default TabletAndroidIcon