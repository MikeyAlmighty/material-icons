import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SendIcon = ({
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
    <path d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
  </Svg>
)

SendIcon.displayName = 'SendIcon'

SendIcon.defaultProps = {
  size: 24
}

export default SendIcon