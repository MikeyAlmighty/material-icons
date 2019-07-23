import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MessageProcessingIcon = ({
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
    <path d='M17,11H15V9H17M13,11H11V9H13M9,11H7V9H9M20,2H4C2.9,2 2,2.9 2,4V22L6,18H20C21.1,18 22,17.1 22,16V4C22,2.89 21.1,2 20,2Z' />
  </Svg>
)

MessageProcessingIcon.displayName = 'MessageProcessingIcon'

MessageProcessingIcon.defaultProps = {
  size: 24
}

export default MessageProcessingIcon