import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MessageSettingsIcon = ({
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
    <path d='M20,2H4C2.9,2 2,2.9 2,4V22L6,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2M11,24H13V22H11V24M7,24H9V22H7V24M15,24H17V22H15V24Z' />
  </Svg>
)

MessageSettingsIcon.displayName = 'MessageSettingsIcon'

MessageSettingsIcon.defaultProps = {
  size: 24
}

export default MessageSettingsIcon