import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MessageReplyTextIcon = ({
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
    <path d='M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4C22,2.9 21.1,2 20,2H4C2.9,2 2,2.9 2,4V16C2,17.1 2.9,18 4,18H18L22,22V4Z' />
  </Svg>
)

MessageReplyTextIcon.displayName = 'MessageReplyTextIcon'

MessageReplyTextIcon.defaultProps = {
  size: 24
}

export default MessageReplyTextIcon