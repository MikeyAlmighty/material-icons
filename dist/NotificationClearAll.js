import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NotificationClearAllIcon = ({
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
    <path d='M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7' />
  </Svg>
)

NotificationClearAllIcon.displayName = 'NotificationClearAllIcon'

NotificationClearAllIcon.defaultProps = {
  size: 24
}

export default NotificationClearAllIcon