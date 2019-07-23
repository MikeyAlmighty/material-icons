import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailOpenIcon = ({
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
    <path d='M4,8L12,13L20,8V8L12,3L4,8V8M22,8V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V8C2,7.27 2.39,6.64 2.97,6.29L12,0.64L21.03,6.29C21.61,6.64 22,7.27 22,8Z' />
  </Svg>
)

EmailOpenIcon.displayName = 'EmailOpenIcon'

EmailOpenIcon.defaultProps = {
  size: 24
}

export default EmailOpenIcon