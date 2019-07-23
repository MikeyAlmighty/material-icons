import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MailboxOutlineIcon = ({
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
    <path d='M17,4H7C4.24,4 2,6.24 2,9V20H20C21.1,20 22,19.1 22,18V9C22,6.24 19.76,4 17,4M10,18H4V9C4,7.34 5.34,6 7,6C8.66,6 10,7.34 10,9V18M20,18H12V9C12,7.92 11.65,6.86 11,6H17C18.66,6 20,7.34 20,9V18M13,11V13H17V15H19V11H13M9,11H5V9H9V11Z' />
  </Svg>
)

MailboxOutlineIcon.displayName = 'MailboxOutlineIcon'

MailboxOutlineIcon.defaultProps = {
  size: 24
}

export default MailboxOutlineIcon