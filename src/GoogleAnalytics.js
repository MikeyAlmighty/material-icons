import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GoogleAnalyticsIcon = ({
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
    <path d='M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H17L15,21V9L15,5C15,3.9 15.9,3 17,3H19M5,21C3.9,21 3,20.1 3,19V17C3,15.9 3.9,15 5,15H9V11C9,9.9 9.9,9 11,9H14.5V21H5Z' />
  </Svg>
)

GoogleAnalyticsIcon.displayName = 'GoogleAnalyticsIcon'

GoogleAnalyticsIcon.defaultProps = {
  size: 24
}

export default GoogleAnalyticsIcon