import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailVariantIcon = ({
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
    <path d='M12,13L2,6.76V6C2,4.89 2.89,4 4,4H20C21.1,4 22,4.9 22,6V6.75L12,13M22,18C22,19.1 21.1,20 20,20H4C2.89,20 2,19.1 2,18V9.11L4,10.36V18H20V10.36L22,9.11V18Z' />
  </Svg>
)

EmailVariantIcon.displayName = 'EmailVariantIcon'

EmailVariantIcon.defaultProps = {
  size: 24
}

export default EmailVariantIcon