import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SendLockIcon = ({
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
    <path d='M23,18V17.5C23,16.12 21.88,15 20.5,15C19.12,15 18,16.12 18,17.5V18C17.45,18 17,18.45 17,19V23C17,23.55 17.45,24 18,24H23C23.55,24 24,23.55 24,23V19C24,18.45 23.55,18 23,18M22,18H19V17.5C19,16.67 19.67,16 20.5,16C21.33,16 22,16.67 22,17.5V18M23,12L2,21V14L17,12L2,10V3L23,12Z' />
  </Svg>
)

SendLockIcon.displayName = 'SendLockIcon'

SendLockIcon.defaultProps = {
  size: 24
}

export default SendLockIcon