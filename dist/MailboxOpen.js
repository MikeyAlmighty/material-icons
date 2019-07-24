import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MailboxOpenIcon = ({
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
    <path d='M8,4C5.24,4 3,6.24 3,9V18H1V20H21C22.1,20 23,19.1 23,18V9C23,6.24 20.76,4 18,4H8M8,6C9.66,6 11,7.34 11,9V18H5V9C5,7.34 6.34,6 8,6M14,11H20V15H18V13H14V11Z' />
  </Svg>
)

MailboxOpenIcon.displayName = 'MailboxOpenIcon'

MailboxOpenIcon.defaultProps = {
  size: 24
}

export default MailboxOpenIcon