import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MailboxOpenUpOutlineIcon = ({
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
    <path d='M14,12.85V6.85H18V8.85H16V12.85H14M18,3.85H8C5.24,3.85 3,6.09 3,8.85V17.85H1V19.85H21C22.1,19.85 23,18.95 23,17.85V8.85C23,6.09 20.76,3.85 18,3.85M11,17.85H5V8.85C5,7.19 6.34,5.85 8,5.85C9.66,5.85 11,7.19 11,8.85V17.85M21,17.85H13V8.85C13,7.76 12.65,6.71 12,5.85H18C19.66,5.85 21,7.19 21,8.85V17.85Z' />
  </Svg>
)

MailboxOpenUpOutlineIcon.displayName = 'MailboxOpenUpOutlineIcon'

MailboxOpenUpOutlineIcon.defaultProps = {
  size: 24
}

export default MailboxOpenUpOutlineIcon