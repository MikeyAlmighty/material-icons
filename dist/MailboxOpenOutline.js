import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MailboxOpenOutlineIcon = ({
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
    <path d='M14,11H20V15H18V13H14V11M18,4H8C5.24,4 3,6.24 3,9V18H1V20H21C22.1,20 23,19.1 23,18V9C23,6.24 20.76,4 18,4M11,18H5V9C5,7.34 6.34,6 8,6C9.66,6 11,7.34 11,9V18M21,18H13V9C13,7.92 12.65,6.86 12,6H18C19.66,6 21,7.34 21,9V18Z' />
  </Svg>
)

MailboxOpenOutlineIcon.displayName = 'MailboxOpenOutlineIcon'

MailboxOpenOutlineIcon.defaultProps = {
  size: 24
}

export default MailboxOpenOutlineIcon