import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MailboxUpIcon = ({
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
    <path d='M5,9H9V11H5V9M22,9V18C22,19.1 21.1,20 20,20H2V9C2,6.24 4.24,4 7,4H17C19.76,4 22,6.24 22,9M10,9C10,7.34 8.66,6 7,6C5.34,6 4,7.34 4,9V18H10V9M16,7H12V13H14V9H16V7Z' />
  </Svg>
)

MailboxUpIcon.displayName = 'MailboxUpIcon'

MailboxUpIcon.defaultProps = {
  size: 24
}

export default MailboxUpIcon