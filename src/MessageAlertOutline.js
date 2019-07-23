import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MessageAlertOutlineIcon = ({
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
    <path d='M13,10H11V6H13V10M13,12H11V14H13V12M22,4V16C22,17.1 21.1,18 20,18H6L2,22V4C2,2.9 2.9,2 4,2H20C21.1,2 22,2.9 22,4M20,4H4V17.2L5.2,16H20V4Z' />
  </Svg>
)

MessageAlertOutlineIcon.displayName = 'MessageAlertOutlineIcon'

MessageAlertOutlineIcon.defaultProps = {
  size: 24
}

export default MessageAlertOutlineIcon